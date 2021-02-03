import SimplexNoise from 'simplex-noise';
import { AREA_TYPE_CANYON, AREA_TYPE_DEEP_WATER, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from '../../editor/AreaType';
import { generateWorld } from '../../editor/EditorWorldGenerator';
import { SPWN_CLIFF, SPWN_DESERT_REED, SPWN_GROUND_GRASS, SPWN_GROUND_GRASS_DEAD, SPWN_GROUND_SAND, SPWN_GROUND_STONE, SPWN_GROUND_WATER, SPWN_GROUND_WATER_DEEP, SPWN_PINE_TREE } from '../data/Spawnables';
import { spawnForChunk } from '../data/Spawner';
import { randomBool, randomWeightedBool } from '../utils/rand';

const simplex = new SimplexNoise('seed1');
const map = generateWorld(128, 96, '1');

export const generateChunk = (chunk) => {
    console.log(`generate chunk ${chunk.id}`);

    for (let x = 0; x < chunk.width; x++) {
        for (let y = 0; y < chunk.width; y++) {
            const fx = chunk.x + (x / chunk.width);
            const fy = chunk.y + (y / chunk.height);

            const v = map.getType(fx, fy);

            switch (v) {
                case AREA_TYPE_DEEP_WATER:
                    spawnForChunk(SPWN_GROUND_WATER_DEEP, x, y, {}, chunk);
                    break;
                case AREA_TYPE_WATER:
                    spawnForChunk(SPWN_GROUND_WATER, x, y, {}, chunk);
                    break;
                case AREA_TYPE_PLAINS:
                    spawnForChunk(SPWN_GROUND_GRASS, x, y, {}, chunk);
                    break;
                case AREA_TYPE_DESERT:
                    spawnForChunk(SPWN_GROUND_SAND, x, y, {}, chunk);
                    if (randomWeightedBool(.05)) {
                        spawnForChunk(SPWN_DESERT_REED, x, y, {}, chunk);
                    }
                    break;
                case AREA_TYPE_FOREST:
                    spawnForChunk(SPWN_GROUND_GRASS, x, y, {}, chunk);
                    if (randomWeightedBool(.2)) {
                        spawnForChunk(SPWN_PINE_TREE, x, y, {}, chunk);
                    }
                    break;
                case AREA_TYPE_CANYON:
                    spawnForChunk(SPWN_GROUND_GRASS_DEAD, x, y, {}, chunk);
                    if (randomWeightedBool(.2)) {
                        spawnForChunk(SPWN_CLIFF, x, y, {}, chunk);
                    }
                    break;
                default:
                    spawnForChunk(SPWN_GROUND_STONE, x, y, {}, chunk);
            }
        }
    }
};
