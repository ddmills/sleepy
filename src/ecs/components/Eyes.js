import { Component } from 'geotic';
import { IsPlayer } from './IsPlayer';

export class Eyes extends Component {
    onTryDetectHostiles(evt) {
        const position = window.game.map.getPosition(this.entity.id);

        if (!position) {
            return;
        }

        const neighbors = window.game.map.getNeighborEntities(position.x, position.y).flat();

        const target = neighbors.find((neighbor) => neighbor.has(IsPlayer));

        if (target) {
            evt.data.target = target;
            evt.handle();
        }
    }
}
