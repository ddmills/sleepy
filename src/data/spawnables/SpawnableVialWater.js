import { game } from '../../core/Game';
import { LIQUID_WATER } from '../../enums/LiquidTypes';

export const createSpawnable = () => {
    const vial = game.ecs.createPrefab('Vial');

    vial.liquidContainer.content = LIQUID_WATER;

    return vial;
};
