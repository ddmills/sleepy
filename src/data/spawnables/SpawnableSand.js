import { pickRandom } from '../../utils/rand';

export const createSpawnable = () => {
    const sand = game.ecs.createPrefab('Sand');
    const ch = pickRandom([' ', ' ', 'τ', 'Φ', 'Θ', 'Ω']);

    sand.glyph.ch = ch;

    return sand;
};
