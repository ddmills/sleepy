import { ForestGenerator } from './ForestGenerator';
import { ForestStrongholdGenerator } from './ForestStrongholdGenerator';

const mapping = {
    ['FOREST']: ForestGenerator,
    ['FOREST_STRONGHOLD']: ForestStrongholdGenerator,
};

export const getGenerator = (name) => {
    return mapping[name];
};
