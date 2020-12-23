import { Actor, IsDead, IsDestroying, IsIncapacitated } from '../ecs/components';
import System from './System';

export default class ActionSystem extends System {
    #query = null;

    constructor(game) {
        super(game);

        this.#query = game.ecs.createQuery({
            all: [Actor],
            none: [IsDestroying, IsDead, IsIncapacitated],
        });
    }

    update(dt) {
        const entities = this.#query.get();
        const sorted = Array.from(entities);

        sorted.sort((a, b) => (a.actor.energy < b.actor.energy ? 1 : -1));

        let entity = sorted[0];

        if (entity && !entity.actor.hasEnergy) {
            this.game.clock.incrementTick(-1 * entity.actor.energy);

            entities.forEach((entity) => {
                entity.actor.addEnergy(this.game.clock.tickDelta);
            });
        }

        while (entity && entity.actor.hasEnergy) {
            if (entity.isPlayer) {
                const action = this.game.player.getNextAction();

                if (action) {
                    action();
                }

                return true;
            }

            entity.fireEvent('take-action');
            entity = sorted.shift();
        }

        return false;
    }
}
