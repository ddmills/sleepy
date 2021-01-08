import { SCREEN_CONFIRM, SCREEN_WAIT } from '../core/screens/ScreenType';
import { getChanneling } from '../data/Abilities';
import {
    Actor,
    IsDead,
    IsDestroying,
    IsIncapacitated,
} from '../ecs/components';
import System from './System';

export default class ActionSystem extends System {
    #query = null;

    constructor(game) {
        super(game);

        this.#query = game.ecs.createQuery({
            all: [Actor],
            none: [IsDestroying, IsDead],
        });
    }

    update(dt) {
        const entities = this.#query.get();
        const sorted = Array.from(entities);

        sorted.sort((a, b) => (a.actor.energy < b.actor.energy ? 1 : -1));

        let entity = sorted[0];

        if (entity && !entity.actor.hasEnergy) {
            this.game.clock.incrementTick(-1 * entity.actor.energy);

            entities.forEach((e) => {
                e.actor.addEnergy(this.game.clock.tickDelta);
            });
        }

        while (entity && entity.actor.hasEnergy) {
            if (entity.isIncapacitated) {
                entity.fireEvent('energy-consumed', 100);
                if (entity.isPlayer) {
                    this.game.screens.pushScreen(SCREEN_WAIT, {
                        time: 250
                    });
                    return true;
                }
                continue;
            }

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
