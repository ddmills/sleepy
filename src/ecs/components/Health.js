import { Component } from 'geotic';
import { Dead } from './Dead';

export class Health extends Component {
    static properties = {
        value: 10,
        max: 10,
    };

    onDamage(evt) {
        this.value -= evt.data.value;

        console.log(`ouch! ${this.entity.moniker.name} takes ${evt.data.value} damage.`);

        if (this.value <= 0) {
            this.value = 0;
            this.entity.add(Dead);
        }

        evt.handle();
    }
}
