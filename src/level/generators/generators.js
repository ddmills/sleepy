import { ForestCabinsGenerator } from './ForestCabinsGenerator';
import { ForestGenerator } from './ForestGenerator';
import { ForestStrongholdGenerator } from './ForestStrongholdGenerator';

const mapping = {
    ['FOREST']: ForestGenerator,
    ['FOREST_STRONGHOLD']: ForestStrongholdGenerator,
    ['FOREST_CABINS']: ForestCabinsGenerator,
};

export const getGenerator = (name) => {
    return mapping[name];
};
