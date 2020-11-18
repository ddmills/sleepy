import { MeleeCommand } from '../ecs/components';
import System from './System';

export default class MeleeSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [MeleeCommand],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            const target = entity.meleeCommand.target;

            if (target) {
                entity.fireEvent('try-melee', {
                    target,
                });
            }

            entity.meleeCommand.destroy();
        });
    }
}
