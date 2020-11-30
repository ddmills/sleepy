import { ForestCabinsGenerator } from './ForestCabinsGenerator';
import { ForestGenerator } from './ForestGenerator';
import { ForestStrongholdGenerator } from './ForestStrongholdGenerator';
import { ForestTownGenerator } from './ForestTownGenerator';

const mapping = {
    ['FOREST']: ForestGenerator,
    ['FOREST_STRONGHOLD']: ForestStrongholdGenerator,
    ['FOREST_CABINS']: ForestCabinsGenerator,
    ['FOREST_TOWN']: ForestTownGenerator,
};

export const getGenerator = (name) => {
    return mapping[name];
};
