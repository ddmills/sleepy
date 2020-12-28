import { IsDestroying } from '../ecs/components';
import { AbilityStatus } from '../ecs/components/AbilityStatus';
import System from './System';

export default class AbilitySystem extends System {
    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [AbilityStatus],
            none: [IsDestroying],
        });
    }

    update(dt) {
        const delta = this.game.clock.tickDelta;

        if (!delta) {
            return;
        }

        this.query.get().forEach((entity) => {
            Object.values(entity.abilityStatus).forEach((status) => {
                status.ability.updateAbilityStatus(delta, status);
            });
        });
    }
}
