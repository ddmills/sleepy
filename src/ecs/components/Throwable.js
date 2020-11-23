import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_ADVENTURE, SCREEN_CURSOR } from '../../core/screens/ScreenType';
import { CURSOR_SEGMENT_INVALID, CURSOR_SEGMENT_INTEREST, CURSOR_SEGMENT_UNKNOWN, CURSOR_SEGMENT_NONE } from '../../enums/CursorSegments';
import { Blocker } from './Blocker';
import { Body } from './Body';
import { Inventory } from './Inventory';
import { IsInventoried } from './IsInventoried';
import { Stackable } from './Stackable';
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

    _removeFromInventory() {
        if (!this.entity.has(IsInventoried)) {
            return;
        }

        const isStackable = this.entity.has(Stackable);
        const quantity = isStackable ? 1 : null;

        this.entity.isInventoried.owner.inventory.removeLoot(this.entity, quantity);
    }

    onTryThrow(evt) {
        game.screens.pushScreen(SCREEN_CURSOR, {
            drawLine: true,
            drawTags: false,
            onResult: (cursor) => {
                game.screens.setScreen(SCREEN_ADVENTURE);

                this._removeFromInventory();

                this.entity.position.setPos(cursor.position.x, cursor.position.y);

                // emit a "hit-by" on target entity (?)
                // emit an "hit" on thrown entity (?)
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
