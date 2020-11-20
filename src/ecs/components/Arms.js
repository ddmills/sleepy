import { Component } from 'geotic';
import { Actor } from './Actor';

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

        const map = window.game.map;

        const targetPos = evt.data.target.position.getPos();
        const selfPos = this.entity.position.getPos();
        const isAdjacent = map.isAdjacent(selfPos.x, selfPos.y, targetPos.x, targetPos.y);

        if (!isAdjacent) {
            return;
        }

        window.game.particles.createParticle(targetPos.x, targetPos.y, {
            lifetime: 140,
            fg1s: ['#8d4c4f', '#730d14'],
            glyphs: ['-'],
        });

        evt.data.target.fireEvent('damage', damage);

        this.entity.fireEvent('energy-consumed', 800);

        evt.handle();
    }
}
