import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SPWN_HEALTH_SHARD } from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { allDirections, directionDelta } from '../../enums/Directions';
import { randomWeightedBool } from '../../utils/rand';

export const SHARD_VAL_SMALL = 1;
export const SHARD_VAL_MEDIUM = 3;
export const SHARD_VAL_LARGE = 6;

export class HealthShardDropper extends Component {
    onDeath(evt) {
        const lvl = this.entity.level.level;
        const playerLvl = game.player.entity.level.level;
        const lvlDiff = 5 + (lvl - playerLvl);

        if (lvlDiff < 0) {
            return;
        }

        const pos = this.entity.position.getPos();
        const emptyCells = [];

        allDirections().forEach((dir) => {
            const delta = directionDelta(dir);
            const adjacent = {
                x: pos.x + delta.x,
                y: pos.y + delta.y
            };
            const entities = game.map.getEntitiesAt(adjacent.x, adjacent.y);

            if (entities.length <= 0) {
                emptyCells.push(adjacent);
            }
        });

        if (emptyCells.length <= 3) {
            emptyCells.push(pos);
        }

        let shardCount = lvlDiff;
        let i = 0;

        while (shardCount > 0) {
            const shardPos = emptyCells[i % emptyCells.length];
            let shardValue = SHARD_VAL_SMALL;

            if (shardCount >= SHARD_VAL_LARGE && randomWeightedBool(.8)) {
                shardValue = SHARD_VAL_LARGE;
            } else if (shardCount >= SHARD_VAL_MEDIUM && randomWeightedBool(.8)) {
                shardValue = SHARD_VAL_MEDIUM;
            }

            shardCount -= shardValue;

            spawn(SPWN_HEALTH_SHARD, shardPos.x, shardPos.y, {
                healthShard: {
                    value: shardValue
                }
            });

            i++;
        }
    }
}
