import { Component } from 'geotic';
import { game } from '../../core/Game';
import { FactionMember } from './FactionMember';

export class Eyes extends Component {
    onTryDetectHostiles(evt) {
        const position = game.map.getPosition(this.entity.id);

        if (!position) {
            return;
        }

        const target = game.map
            .getNeighborEntities(position.x, position.y)
            .flat()
            .filter((e) => e.has(FactionMember))
            .find((neighbor) => {
                return game.factions.areEntitiesHostile(
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
