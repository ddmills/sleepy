import { Component } from 'geotic';
import { game } from '../../core/Game';
import {
    CONSOLE_EVENT_DAMAGE,
    CONSOLE_EVENT_DEAD,
} from '../../enums/ConsoleEvents';
import { Dead } from './Dead';

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
                damage: evt.data.damage,
            });

            this.value = 0;
            this.entity.add(Dead);
        }

        game.console.event(CONSOLE_EVENT_DAMAGE, {
            target: this.entity,
            source: evt.data.source,
            damage: evt.data.damage,
        });

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
