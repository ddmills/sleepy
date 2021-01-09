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
