import ecs from '../ecs';
import { Actor } from '../ecs/components';
import System from './System';

export default class ActionSystem extends System {
    #query = null;

    constructor(game) {
        super(game);

        this.#query = game.ecs.createQuery({
            all: [Actor],
        });
    }

    update(dt) {
        const entities = this.#query.get();
        const sorted = Array.from(entities);
        sorted.sort((a, b) => (a.actor.energy < b.actor.energy ? 1 : -1));

        const entity = sorted[0];

        if (!entity.actor.hasEnergy) {
            this.game.clock.incrementTick(-1 * entity.actor.energy);

            entities.forEach((entity) => {
                entity.actor.addEnergy(this.game.clock.tickDelta);
            });
        }

        if (entity.actor.hasEnergy && !entity.isPlayer) {
            entity.fireEvent('take-action');
        }
    }
}
