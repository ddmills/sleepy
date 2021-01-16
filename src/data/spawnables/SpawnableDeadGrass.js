import { pickRandom } from '../../utils/rand';
import * as Grass from './SpawnableGrass';

export const createSpawnable = () => {
    const grass = Grass.createSpawnable();
    const color = pickRandom(['#65553b', '#826b40', '#757632', '#8c6d32', '#718427']);

    grass.glyph.fg1 = color;

    return grass;
};
