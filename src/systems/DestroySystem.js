import { IsDestroying } from '../ecs/components';
import System from './System';

export default class DestroySystem extends System {
    #query;

    constructor(game) {
        super(game);

        this.#query = game.ecs.createQuery({
            all: [IsDestroying],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            if (entity.isDestroying.pass > 0) {
                entity.destroy();
            } else {
                entity.isDestroying.pass++;
            }
        });
    }
}
