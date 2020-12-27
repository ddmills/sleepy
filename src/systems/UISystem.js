import { getStatus } from '../data/Statuses';
import {
    Moniker,
    Actor,
    IsPlayer,
    IsInventoried,
    IsVisible,
} from '../ecs/components';
import System from './System';

export default class UISystem extends System {
    showTicks = false;
    beingsQuery = null;

    constructor(game) {
        super(game);
        this.beingsQuery = this.game.ecs.createQuery({
            all: [Moniker, Actor, IsVisible],
            none: [IsInventoried],
        });
    }

    renderNearbyCreatures() {
        const beings = this.beingsQuery.get();

        let offsetY = 2;

        beings.forEach((entity) => {
            let moniker = entity.moniker.display;
            let glyphOffset = 0;

            if (entity.factionMember) {
                const relation = this.game.factions.getEntityRelation(
                    game.player.entity,
                    entity
                );
                const glyph = this.game.factions.getAttitudeGlyph(relation);

                this.game.renderer.drawUI(
                    0,
                    offsetY,
                    glyph.char,
                    glyph.fg1,
                    glyph.fg2
                );

                glyphOffset = 1.5;
            }

            this.game.renderer.drawText(glyphOffset, offsetY, moniker);

            let statusOffset =
                this.game.renderer.computeTextWidth(moniker) +
                glyphOffset +
                0.5;

            let dotLevel = 0;

            if (entity.status) {
                entity.status.forEach((status) => {
                    const statusType = getStatus(status.key);

                    if (statusType.isDot) {
                        dotLevel = 2;
                    }

                    this.game.renderer.drawUI(
                        statusOffset,
                        offsetY,
                        statusType.glyph.ch,
                        statusType.glyph.fg1,
                        statusType.glyph.fg2
                    );
                    statusOffset++;
                });
            }

            if (entity.health) {
                offsetY++;

                const health = entity.health;
                const barWidth = 8;

                const prcnt = health.value / health.max;
                const healthWidth = Math.ceil(prcnt * barWidth * 2) / 2;
                const middle = Math.floor(barWidth / 2) - 1;

                const primaryHP = '#803636';
                const secondaryHp = '#352323';

                for (let i = 0; i < barWidth; i++) {
                    const diff = healthWidth - i;
                    if (dotLevel && i === middle) {
                        if (diff === 0.5) {
                            if (dotLevel === 1) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '#',
                                    primaryHP,
                                    secondaryHp
                                );
                            } else if (dotLevel === 2) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '"',
                                    primaryHP,
                                    secondaryHp
                                );
                            } else if (dotLevel === 3) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '!',
                                    primaryHP,
                                    secondaryHp
                                );
                            }
                        } else if (diff > 0) {
                            if (dotLevel === 1) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '‼',
                                    primaryHP,
                                    secondaryHp
                                );
                            } else if (dotLevel === 2) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '↕',
                                    primaryHP,
                                    secondaryHp
                                );
                            } else if (dotLevel === 3) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '◄',
                                    primaryHP,
                                    secondaryHp
                                );
                            }
                        } else {
                            if (dotLevel === 1) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '‼',
                                    secondaryHp,
                                    primaryHP
                                );
                            } else if (dotLevel === 2) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '↕',
                                    secondaryHp,
                                    primaryHP
                                );
                            } else if (dotLevel === 3) {
                                this.game.renderer.drawUI(
                                    i,
                                    offsetY,
                                    '◄',
                                    secondaryHp,
                                    primaryHP
                                );
                            }
                        }
                    } else if (diff === 0.5) {
                        this.game.renderer.drawUI(
                            i,
                            offsetY,
                            ' ',
                            primaryHP,
                            secondaryHp
                        );
                    } else if (diff > 0) {
                        this.game.renderer.drawUI(
                            i,
                            offsetY,
                            '►',
                            primaryHP,
                            secondaryHp
                        );
                    } else {
                        this.game.renderer.drawUI(i, offsetY, '►', secondaryHp);
                    }
                }
            }

            offsetY++;
        });
    }

    update(dt) {
        if (this.showTicks) {
            const turn = this.game.clock.turn;
            const subTurn = `${this.game.clock.subTurn.toFixed(0)}`.padEnd(
                3,
                '0'
            );

            const str = `${turn}.${subTurn}`;
            const len = Math.ceil(this.game.renderer.computeTextWidth(str));
            this.game.renderer.drawText(
                this.game.camera.width - 1 - len,
                1,
                str
            );
        }

        this.renderNearbyCreatures();
    }
}
