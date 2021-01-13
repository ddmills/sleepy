import { Component } from 'geotic';
import { game } from '../../core/Game';
import { CONSOLE_EVENT_LEVEL } from '../../enums/ConsoleEvents';

const LEVEL_XP_CAP = 5000;
const LEVEL_INTENSITY = 16;
const LEVEL_DIFFERENCE_FACTOR = 20;
const SKILL_POINTS_PER_LEVEL = 1;

export class Level extends Component {
    static properties = {
        xp: 0,
        level: 1,
        skillPoints: 0,
    };

    get nextLevelReq() {
        return Math.floor((this.level * LEVEL_XP_CAP) / (this.level + LEVEL_INTENSITY))
    }

    levelUp() {
        this.level++;
        this.skillPoints += SKILL_POINTS_PER_LEVEL;

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

    addXP(xp) {
        this.xp += xp;

        if (this.xp >= this.nextLevelReq) {
            this.xp -= this.nextLevelReq;

            this.levelUp();
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

        this.addXP(levelFactor * LEVEL_DIFFERENCE_FACTOR);
    }
}
