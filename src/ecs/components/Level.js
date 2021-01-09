import { Component } from 'geotic';

export class Level extends Component {
    static properties = {
        xp: 0,
        level: 1
    };

    get nextLevelReq() {
        return 1000 + this.level * 250;
    }

    addXP(xp) {
        this.xp += xp;

        if (this.xp >= this.nextLevelReq) {
            this.xp -= this.nextLevelReq;
            this.level++;
        }
    }

    onEnemyKilled(evt) {
        console.log('an enemy was killed!', evt);

        if (!evt.data.enemy.level) {
            return;
        }

        this.addXP(750);

    }
}
