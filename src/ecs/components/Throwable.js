import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_ADVENTURE, SCREEN_CURSOR } from '../../core/screens/ScreenType';
import { ABILITY_THROWING, getAbilityValue } from '../../data/Abilities';
import Attack from '../../data/Attack';
import { DMG_TYPE_BLUDGEONING } from '../../data/DamageTypes';
import { getStat, STAT_STRENGTH } from '../../data/Stats';
import {
    CURSOR_SEGMENT_INVALID,
    CURSOR_SEGMENT_INTEREST,
    CURSOR_SEGMENT_UNKNOWN,
    CURSOR_SEGMENT_NONE,
} from '../../enums/CursorSegments';
import { bresenhamLine } from '../../utils/BresenhamLine';
import { randomInt } from '../../utils/rand';
import { Blocker } from './Blocker';
import { Body } from './Body';
import { Inventory } from './Inventory';
import { IsVisible } from './IsVisible';

export class Throwable extends Component {
    static properties = {
        die: 4,
        modifier: 0,
        cost: 500,
        damageType: DMG_TYPE_BLUDGEONING,
    };

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
            trajectory,
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
                    this.entity.fireEvent('collide-ground', {
                        initiator,
                        x: prev.x,
                        y: prev.y,
                    });
                } else {
                    this.entity.position.setPos(position.x, position.y);
                    this.entity.fireEvent('collide', {
                        initiator,
                        hit,
                        x: position.x,
                        y: position.y,
                    });

                    const str = getStat(STAT_STRENGTH, initiator);
                    const die = randomInt(1, this.die);
                    const damage = die + str + this.modifier;
                    const attack = new Attack({
                        attacker: initiator,
                        defender: hit,
                        weaponName: this.entity.moniker.display,
                        damage,
                        damageType: this.damageType,
                        ignoreDodge: true,
                    });

                    hit.fireEvent('attacked', { attack });
                }

                break;
            } else if (i === trajectory.length - 1) {
                this.entity.position.setPos(position.x, position.y);
                this.entity.fireEvent('collide-ground', {
                    initiator,
                    x: position.x,
                    y: position.y,
                });
            }
        }
    }

    onTryThrow(evt) {
        const range = getAbilityValue(ABILITY_THROWING, evt.data.interactor);

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
                    cursor.position.y
                );
                const trajectory = line.slice(0, range + 1).map((pos) => ({
                    x: pos.x,
                    y: pos.y,
                    entities: game.map.getEntitiesAt(pos.x, pos.y),
                }));

                evt.data.interactor.fireEvent('energy-consumed', this.cost);

                this.throw(trajectory, evt.data.interactor);
            },
            onCancel: () => {
                game.screens.popScreen();
            },
            getSegmentTypes: (line) => {
                let lineValid = true;

                const result = line.map(({ x, y }, idx) => {
                    if (idx === 0) {
                        return CURSOR_SEGMENT_NONE;
                    }

                    // todo: fire "query" event on each item in path
                    const entities = game.map.getEntitiesAt(x, y);
                    const blocker = entities.find(
                        (entity) => entity.has(IsVisible) && entity.has(Blocker)
                    );
                    const body = entities.find(
                        (entity) => entity.has(IsVisible) && entity.has(Body)
                    );

                    if (blocker) {
                        lineValid = false;
                    }

                    const atMaxRange = idx === range;

                    if (lineValid && (body || atMaxRange)) {
                        lineValid = false;
                        return CURSOR_SEGMENT_INTEREST;
                    }

                    return !lineValid
                        ? CURSOR_SEGMENT_INVALID
                        : CURSOR_SEGMENT_UNKNOWN;
                });

                const interestIdx = result.indexOf(CURSOR_SEGMENT_INTEREST);
                const blockerIdx = result.indexOf(CURSOR_SEGMENT_INVALID);

                if (interestIdx < blockerIdx && blockerIdx >= 1) {
                    result[blockerIdx - 1] = CURSOR_SEGMENT_INTEREST;
                }

                return result;
            },
        });
    }
}
