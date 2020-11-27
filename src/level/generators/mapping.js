import { UniformGenerator } from './UniformGenerator';
import { SquareGenerator } from './SquareGenerator';

const mapping = {
    ['UNIFORM']: UniformGenerator,
    ['SQUARE']: SquareGenerator
}

export const getGenerator = (name) => {
    return mapping[name];
};
