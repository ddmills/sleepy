import { SPWN_GROUND_GRASS_DEAD } from '../data/Spawnables';
import { spawnForChunk } from '../data/Spawner';

export const generateChunk = (chunk) => {
    console.log(`generate chunk ${chunk.id}`);

    for (let x = 0; x < chunk.width; x++) {
        for (let y = 0; y < chunk.width; y++) {
            spawnForChunk(SPWN_GROUND_GRASS_DEAD, x, y, {}, chunk);
        }
    }
};
