import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_ADVENTURE, SCREEN_CURSOR } from '../../core/screens/ScreenType';
import { CURSOR_SEGMENT_INVALID, CURSOR_SEGMENT_INTEREST, CURSOR_SEGMENT_UNKNOWN, CURSOR_SEGMENT_NONE } from '../../enums/CursorSegments';
import { bresenhamLine } from '../../utils/BresenhamLine';
import { Blocker } from './Blocker';
import { Body } from './Body';
import { Inventory } from './Inventory';
import { Visible } from './Visible';

export class Throwable extends Component {
    onGetInteractions(evt) {
        if (!evt.data.interactor.has(Inventory)) {
            return;
        }

        if (!evt.data.interactor.inventory.hasLoot(this.entity)) {
            return;
        }

        evt.data.interactions.push({
            name: 'Throw',
            evt: 'try-throw',
        });
    }

    throw(trajectory, initiator) {
        this.entity.fireEvent('thrown', {
            initiator,
            trajectory
        });

        for (let i = 0; i < trajectory.length; i++) {
            if (i == 0) {
                continue;
            }

            const position = trajectory[i];
            const entities = position.entities;

            let stopped = false;
            let deflected = false;

            const hit = entities.find((entity) => {
                const evt = entity.fireEvent('projectile-hit', {
                    initiator,
                    trajectory,
                    projectile: this.entity,
                });

                stopped = evt.data.stopProjectile;
                deflected = evt.data.deflectProjectile;

                return stopped || deflected;
            });

            if (hit) {
                if (deflected) {
                    const prev = trajectory[i - 1];

                    this.entity.position.setPos(prev.x, prev.y);
                } else {
                    this.entity.position.setPos(position.x, position.y);
                }

                break;
            } else if (i === trajectory.length - 1) {
                this.entity.position.setPos(position.x, position.y);
            }
        }
    }

    onTryThrow(evt) {
        game.screens.pushScreen(SCREEN_CURSOR, {
            start: evt.data.interactor.position.getPos(),
            drawLine: true,
            drawTags: false,
            onResult: (cursor) => {
                game.screens.setScreen(SCREEN_ADVENTURE);

                this.entity.position.setPos(cursor.start.x, cursor.start.y);

                const line = bresenhamLine(
                    cursor.start.x,
                    cursor.start.y,
                    cursor.position.x,
                    cursor.position.y,
                );
                const trajectory = line.map((pos) => ({
                    x: pos.x,
                    y: pos.y,
                    entities: game.map.getEntitiesAt(pos.x, pos.y)
                }));

                this.throw(trajectory, evt.data.interactor);
            },
            onCancel: () => {
                game.screens.popScreen();
            },
            getSegmentTypes: (line) => {
                let lineValid = true;
                const result = line.map(({x, y}, idx) => {
                    if (idx === 0) {
                        return CURSOR_SEGMENT_NONE;
                    }

                    // todo: fire "query" event on each item in path
                    const entities = game.map.getEntitiesAt(x, y);
                    const blocker = entities.find((entity) => entity.has(Visible) && entity.has(Blocker));
                    const body = entities.find((entity) => entity.has(Visible) && entity.has(Body));

                    if (blocker) {
                        lineValid = false;
                    }

                    if (lineValid && body) {
                        lineValid = false;
                        return CURSOR_SEGMENT_INTEREST;
                    }

                    return !lineValid ? CURSOR_SEGMENT_INVALID : CURSOR_SEGMENT_UNKNOWN;
                });

                const interestIdx = result.indexOf(CURSOR_SEGMENT_INTEREST);
                const blockerIdx = result.indexOf(CURSOR_SEGMENT_INVALID);

                if (interestIdx < 0 && blockerIdx >= 1) {
                    result[blockerIdx - 1] = CURSOR_SEGMENT_INTEREST;
                }

                return result;
            }
        });
    }
}
