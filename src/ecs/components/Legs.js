import { Component } from 'geotic';
import { Position } from './Position';
import { Actor } from './Actor';
import { Blocker } from './Blocker';
import { Faction } from './Faction';

export class Legs extends Component {
    onTryMove(evt) {
        if (!this.entity.has(Position)) {
            return;
        }

        if (this.entity.has(Actor) && !this.entity.actor.hasEnergy) {
            console.log('No energy??');
            return;
        }

        const position = this.entity.position.getPos();
        const targetX = position.x + evt.data.x;
        const targetY = position.y + evt.data.y;

        const targetTileEntities = window.game.map.getEntitiesAt(targetX, targetY);

        if (targetTileEntities.some((entity) => entity.has(Blocker))) {
            return;
        }

        const nonHostile = targetTileEntities.find((entity) => {
            return entity.has(Faction) && !window.game.factions.areEntitiesHostile(entity, this.entity);
        });

        // swap locations
        if (nonHostile) {
            nonHostile.position.setPos(position.x, position.y);
        }

        this.entity.position.setPos(targetX, targetY);
        this.entity.fireEvent('energy-consumed', 750);

        evt.handle();
    }
}
