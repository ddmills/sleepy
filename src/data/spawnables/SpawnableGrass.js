import { game } from '../../core/Game';
import { pickRandom } from '../../utils/rand';

export const createSpawnable = () => {
    const grass = game.ecs.createPrefab('Grass');
    const ch = pickRandom(['≡', '±', '≥', '≤']);

    grass.glyph.ch = ch;

    return grass;
};
