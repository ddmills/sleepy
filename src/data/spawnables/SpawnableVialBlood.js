import { game } from '../../core/Game';
import { LIQUID_BLOOD } from '../../enums/LiquidTypes';

export const createSpawnable = () => {
    const vial = game.ecs.createPrefab('Vial');

    vial.liquidContainer.content = LIQUID_BLOOD;

    return vial;
};
