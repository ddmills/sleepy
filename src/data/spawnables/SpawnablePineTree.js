import { game } from '../../core/Game';
import { pickRandom } from '../../utils/rand';

export const createSpawnable = () => {
    const type = pickRandom(['PineTree', 'SmallPineTree']);
    const tree = game.ecs.createPrefab(type);

    return tree;
};
