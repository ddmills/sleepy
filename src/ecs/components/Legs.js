import { Component } from 'geotic';
import { Position } from './Position';
import { Actor } from './Actor';
import { Blocker } from './Blocker';

export class Legs extends Component {
    onTryMove(evt) {
        if (!this.entity.has(Position)) {
            return;
        }

        if (this.entity.has(Actor) && !this.entity.actor.hasEnergy) {
            return;
        }

        const targetX = this.entity.position.x + evt.data.x;
        const targetY = this.entity.position.y + evt.data.y;

        const targetTileEntities = window.game.map.getEntitiesAt(targetX, targetY);

        if (targetTileEntities.some((entity) => entity.has(Blocker))) {
            return;
        }

        this.entity.position.x = targetX;
        this.entity.position.y = targetY;
        this.entity.fireEvent('energy-consumed', 750);

        evt.handle();
    }
}
