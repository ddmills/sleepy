import { UniformGenerator } from './UniformGenerator';
import { SquareGenerator } from './SquareGenerator';
import { DenseCastleGenerator } from './DenseCastleGenerator';
import CastleTheme from '../themes/CastleTheme';
import ForestTheme from '../themes/ForestTheme';

const mapping = {
    ['FOREST']: {
        generator: UniformGenerator,
        theme: ForestTheme,
    },
    ['SQUARE']: {
        generator: SquareGenerator,
        theme: CastleTheme,
    },
    ['STRONGHOLD']: {
        generator: DenseCastleGenerator,
        theme: CastleTheme,
    },
};

export const getGenerator = (name) => {
    return mapping[name];
};
