import { Component } from 'geotic';
import { game } from '../../core/Game';
import { CONSOLE_EVENT_LEVEL } from '../../enums/ConsoleEvents';

export class Level extends Component {
    static properties = {
        xp: 0,
        level: 1
    };

    get nextLevelReq() {
        return 1000 + (this.level - 1) * 250;
    }

    addXP(xp) {
        this.xp += xp;

        if (this.xp >= this.nextLevelReq) {
            this.xp -= this.nextLevelReq;
            this.level++;
            game.console.event(CONSOLE_EVENT_LEVEL, {
                entity: this.entity,
                level: this.level,
            });

            const pos = this.entity.position.getPos();

            game.particles.createEmitter(pos.x, pos.y, {
                rate: 5,
                duration: 1200,
            }, {
                glyphs: ['↑'],
                fg1s: ['yellow'],
                speed: .015,
                direction: {
                    x: -1,
                    y: -5
                },
                lifetime: 3000,
            });
            game.particles.createEmitter(pos.x, pos.y, {
                rate: 5,
                duration: 1200,
            }, {
                glyphs: ['↑'],
                fg1s: ['yellow'],
                speed: .015,
                direction: {
                    x: 0,
                    y: -5
                },
                lifetime: 3000,
            });
            game.particles.createEmitter(pos.x, pos.y, {
                rate: 5,
                duration: 1200,
            }, {
                glyphs: ['↑'],
                fg1s: ['yellow'],
                speed: .015,
                direction: {
                    x: 1,
                    y: -5
                },
                lifetime: 3000,
            });
        }
    }

    onEnemyKilled(evt) {
        if (!evt.data.enemy.level) {
            return;
        }

        const levelFactor = 5 + (evt.data.enemy.level.level - this.level);

        if (levelFactor < 0) {
            return;
        }

        this.addXP(levelFactor * 100);
    }
}
