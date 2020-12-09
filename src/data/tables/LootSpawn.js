import WeightedTable from '../../utils/WeightedTable';
import { spawn } from '../Spawner';
import LootTableGoblin from './loot/LootTableGoblin';
import LootTableForest from './loot/LootTableForest';

const tables = {
    TBL_LOOT_GOBLIN: LootTableGoblin,
    TBL_LOOT_FOREST: LootTableForest,
};

export const getTable = (tableKey) => tables[tableKey];

export const pickLoot = (tableKeys = []) => {
    const tables = tableKeys.map(getTable);
    const table = WeightedTable.combine(tables);

    return table.pick();
};

export const spawnLoot = (tableKeys = [], x, y) => {
    const spawnable = pickLoot(tableKeys);

    return spawn(spawnable, x, y);
};
