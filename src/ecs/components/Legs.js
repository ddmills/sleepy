import { Component } from 'geotic';
import { Position } from './Position';
import { Actor } from './Actor';

export class Legs extends Component {
    onTryMove(evt) {
        if (!this.entity.has(Position)) {
            return;
        }

        if (this.entity.has(Actor) && !this.entity.actor.hasEnergy) {
            console.log('NO ENERGY');
            return;
        }

        this.entity.position.x += evt.data.x;
        this.entity.position.y += evt.data.y;
        this.entity.fireEvent('energy-consumed', 750);

        evt.handle();
    }
}
