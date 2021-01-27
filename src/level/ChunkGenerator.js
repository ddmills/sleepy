import SimplexNoise from 'simplex-noise';
import { SPWN_DESERT_REED, SPWN_GROUND_GRASS_DEAD, SPWN_GROUND_SAND } from '../data/Spawnables';
import { spawnForChunk } from '../data/Spawner';

const simplex = new SimplexNoise('seed');

export const generateChunk = (chunk) => {
    console.log(`generate chunk ${chunk.id}`);


    for (let x = 0; x < chunk.width; x++) {
        for (let y = 0; y < chunk.width; y++) {
            const v = simplex.noise2D((chunk.x + x) / 10, (chunk.y + y) / 10);

            if (v <= -1) {
                console.log('low value!!', v);
            } else if (v >= 1) {
                console.log('high value!!', v);
            }

            if (v < .3) {
                spawnForChunk(SPWN_GROUND_GRASS_DEAD, x, y, {}, chunk);
                if (v < -.4) {
                    spawnForChunk(SPWN_DESERT_REED, x, y, {}, chunk);
                }
            } else {
                spawnForChunk(SPWN_GROUND_SAND, x, y, {}, chunk);
            }
        }
    }
};
