import { ForestCabinsGenerator } from './ForestCabinsGenerator';
import { ForestGenerator } from './ForestGenerator';
import { ForestStrongholdGenerator } from './ForestStrongholdGenerator';
import { ForestTownGenerator } from './ForestTownGenerator';
import { CanyonGenerator } from './CanyonGenerator';
import { DesertGenerator } from './DesertGenerator';

const mapping = {
    FOREST: ForestGenerator,
    FOREST_STRONGHOLD: ForestStrongholdGenerator,
    FOREST_CABINS: ForestCabinsGenerator,
    FOREST_TOWN: ForestTownGenerator,
    CANYON: CanyonGenerator,
    DESERT: DesertGenerator,
};

export const getGenerator = (name) => {
    return DesertGenerator;
    // return mapping[name];
};
