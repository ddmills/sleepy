import { Component } from 'geotic';
import { game } from '../../core/Game';
import {
    CONSOLE_EVENT_DAMAGE,
    CONSOLE_EVENT_DEAD,
} from '../../enums/ConsoleEvents';
import { IsDead } from './IsDead';

export class Health extends Component {
    static properties = {
        value: 10,
        max: 10,
    };

    onDamage(evt) {
        this.value -= evt.data.damage.value;

        if (this.value <= 0) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: this.entity,
                source: evt.data.source,
                sourceItem: evt.data.sourceItem,
                damage: evt.data.damage,
            });

            this.value = 0;
            this.entity.add(IsDead);
        } else {
            game.console.event(CONSOLE_EVENT_DAMAGE, {
                target: this.entity,
                source: evt.data.source,
                sourceItem: evt.data.sourceItem,
                damage: evt.data.damage,
            });

            const pos = this.entity.position.getPos();

            game.particles.createParticle(pos.x, pos.y, {
                lifetime: 140,
                fg1s: ['#8d4c4f', '#730d14'],
                glyphs: ['*'],
            });
        }

        evt.handle();
    }

    onHeal(evt) {
        this.value += evt.data.value;

        if (this.value > this.max) {
            this.value = this.max;
        }

        evt.handle();
    }
}
