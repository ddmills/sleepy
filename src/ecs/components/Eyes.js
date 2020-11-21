import { Component } from 'geotic';
import { Faction } from './Faction';

export class Eyes extends Component {
    onTryDetectHostiles(evt) {
        const position = window.game.map.getPosition(this.entity.id);

        if (!position) {
            return;
        }

        const target = window.game.map
            .getNeighborEntities(position.x, position.y)
            .flat()
            .filter((e) => e.has(Faction))
            .find((neighbor) => {
                return window.game.factions.areEntitiesHostile(
                    this.entity,
                    neighbor
                );
            });

        if (target) {
            evt.data.target = target;
            evt.handle();
        }
    }
}
