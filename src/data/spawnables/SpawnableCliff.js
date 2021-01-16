import { game } from '../../core/Game';
import { pickRandom } from '../../utils/rand';

export const createSpawnable = () => {
    const cliff = game.ecs.createPrefab('Cliff');
    const ch = pickRandom(['π', 'Σ', 'σ', 'µ']);

    cliff.glyph.ch = ch;

    return cliff;
};
