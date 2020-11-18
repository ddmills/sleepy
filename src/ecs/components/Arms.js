import { Component } from 'geotic';
import { Position } from './Position';
import { Actor } from './Actor';
import { Blocker } from './Blocker';

export class Arms extends Component {
    onTryMelee(evt) {
        if (this.entity.has(Actor) && !this.entity.actor.hasEnergy) {
            console.warn('onTryMelee - No energy??');
            return;
        }

        const damage = {
            type: 'blunt',
            value: 5,
        };

        evt.data.target.fireEvent('damage', damage);

        this.entity.fireEvent('energy-consumed', 800);

        evt.handle();
    }
}
