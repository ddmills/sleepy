import ecs from '../ecs';
import { Eater } from '../ecs/components';
import System from './System';

export default class HungerSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Eater],
        });
    }

    update(dt) {
        if (this.game.actionSystem.tickDelta > 0) {
            this.#query.get().forEach((entity) => {
                entity.eater.hunger -= this.game.actionSystem.tickDelta;
            });
        }
    }
}
