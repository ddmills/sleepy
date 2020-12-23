import { SCREEN_DEATH } from '../core/screens/ScreenType';
import { IsDead, IsDestroying, IsPlayer } from '../ecs/components';
import System from './System';

export default class DeathSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [IsDead],
            none: [IsDestroying],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            entity.fireEvent('death');

            if (entity.isPlayer) {
                this.game.screens.setScreen(SCREEN_DEATH);
            } else {
                entity.add(IsDestroying);
            }
        });
    }
}
