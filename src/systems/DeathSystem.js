import { Dead, MeleeCommand } from '../ecs/components';
import System from './System';

export default class DeathSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Dead],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            entity.fireEvent('death');

            console.log('ohh no! dead!', entity);

            entity.destroy();
        });
    }
}
