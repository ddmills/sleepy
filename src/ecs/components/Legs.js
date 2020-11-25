import { Component } from 'geotic';
import { Blocker } from './Blocker';
import { Faction } from './Faction';

export class Legs extends Component {
    onTryMove(evt) {
        const position = this.entity.position.getPos();
        const targetX = position.x + evt.data.x;
        const targetY = position.y + evt.data.y;

        const targetTileEntities = window.game.map.getEntitiesAt(
            targetX,
            targetY
        );

        if (targetTileEntities.some((entity) => entity.has(Blocker))) {
            return;
        }

        const nonHostile = targetTileEntities.find((entity) => {
            return (
                entity.has(Faction) &&
                !window.game.factions.areEntitiesHostile(entity, this.entity)
            );
        });

        // swap locations
        if (nonHostile) {
            nonHostile.position.setPos(position.x, position.y);
        }

        this.entity.fireEvent('energy-consumed', 750);
        this.entity.position.setPos(targetX, targetY);

        evt.handle();
    }
}
