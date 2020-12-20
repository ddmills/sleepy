import { Component } from 'geotic';
import { game } from '../../core/Game';
import { bresenhamLine } from '../../utils/BresenhamLine';
import { Shadowcaster } from './Shadowcaster';

export class Eyes extends Component {
    static properties = {
        range: 5,
    };

    canSee(entity) {
        const start = this.entity.position.getPos();
        const end = entity.position.getPos();

        const line = bresenhamLine(start.x, start.y, end.x, end.y);

        if (line.length > this.range) {
            return false;
        }

        return !line.some((segment) => {
            return game.map
                .getEntitiesAt(segment.x, segment.y)
                .some((entity) => entity.has(Shadowcaster));
        });
    }

    onTryDetectHostiles(evt) {
        const position = game.map.getPosition(this.entity.id);

        if (!position) {
            return;
        }

        // get within square area
        const targets = game.map
            .getEntitiesInRange(position.x, position.y, this.range)
            .filter((e) => {
                if (!e.actor) {
                    return false;
                }
                if (e.isDead) {
                    return false;
                }
                if (!game.factions.areEntitiesHostile(this.entity, e)) {
                    return false;
                }

                return this.canSee(e);
            });

        if (targets.length > 0) {
            targets.forEach((e) => {
                evt.data.targets.add(e);
            });
            evt.handle();
        }
    }
}
