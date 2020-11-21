import { Component } from 'geotic';
import { Dead } from './Dead';

export class Health extends Component {
    static properties = {
        value: 10,
        max: 10,
    };

    onDamage(evt) {
        this.value -= evt.data.value;

        console.log(
            `ouch! ${this.entity.moniker.display} takes ${evt.data.value} damage.`
        );

        if (this.value <= 0) {
            this.value = 0;
            this.entity.add(Dead);
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
