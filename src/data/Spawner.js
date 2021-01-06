import { game } from '../core/Game';

import * as VialHoney from './spawnables/SpawnableVialHoney';
import * as VialBlood from './spawnables/SpawnableVialBlood';
import * as VialWater from './spawnables/SpawnableVialWater';
import * as GoblinGrunt from './spawnables/SpawnableGoblinGrunt';
import * as GoblinBruiser from './spawnables/SpawnableGoblinBruiser';
import * as PineTree from './spawnables/SpawnablePineTree';
import * as HumanWanderer from './spawnables/SpawnableHumanWanderer';
import * as PoolLiquid from './spawnables/SpawnablePoolLiquid';
import * as Grass from './spawnables/SpawnableGrass';

const simplePrefab = (prefabName) => (data) =>
    game.ecs.createPrefab(prefabName, data);

const spawnables = {
    SPWN_VIAL_HONEY: VialHoney.createSpawnable,
    SPWN_VIAL_BLOOD: VialBlood.createSpawnable,
    SPWN_VIAL_WATER: VialWater.createSpawnable,
    SPWN_STONE: simplePrefab('Stone'),
    SPWN_WOOD_WALL: simplePrefab('WoodWall'),
    SPWN_WOOD_DOOR: simplePrefab('Door'),
    SPWN_WOOD_CHEST: simplePrefab('Chest'),
    SPWN_STONE_WALL: simplePrefab('Wall'),
    SPWN_DIRT_PATH: simplePrefab('DirtPathway'),
    SPWN_CORPSE: simplePrefab('Corpse'),
    SPWN_GLASS_SHARD: simplePrefab('GlassShard'),
    SPWN_AMULET: simplePrefab('Amulet'),
    SPWN_CLOTH_ARMOR: simplePrefab('ClothArmor'),
    SPWN_HEAVY_PLATE_ARMOR: simplePrefab('PlateArmor'),
    SPWN_LEATHER_ARMOR: simplePrefab('LeatherArmor'),
    SPWN_LEATHER_BOOTS: simplePrefab('Boots'),
    SPWN_SHORTSWORD: simplePrefab('Shortsword'),
    SPWN_GREATSWORD: simplePrefab('Greatsword'),
    SPWN_BATTLE_AXE: simplePrefab('BattleAxe'),
    SPWN_HATCHET: simplePrefab('Hatchet'),
    SPWN_MACE: simplePrefab('Mace'),
    SPWN_GROUND_GRASS: Grass.createSpawnable,
    SPWN_GROUND_STONE: simplePrefab('StoneGround'),
    SPWN_CLOTH_HOOD: simplePrefab('ClothHood'),
    SPWN_WIZARD_CAP: simplePrefab('WizardCap'),
    SPWN_HELM: simplePrefab('Helm'),
    SPWN_TWIG: simplePrefab('Twig'),
    SPWN_ASH: simplePrefab('Ash'),
    SPWN_GOBLIN_GRUNT: GoblinGrunt.createSpawnable,
    SPWN_GOBLIN_BRUISER: GoblinBruiser.createSpawnable,
    SPWN_HUMAN_WANDERER: HumanWanderer.createSpawnable,
    SPWN_PINE_TREE: PineTree.createSpawnable,
    SPWN_POOL_LIQUID: PoolLiquid.createSpawnable,
};

export const spawn = (key, x, y, data = {}) => {
    const entity = spawnables[key](data, x, y);

    if (!isNaN(x) && !isNaN(y) && entity.position) {
        entity.position.setPos(x, y);
    }

    return entity;
};
