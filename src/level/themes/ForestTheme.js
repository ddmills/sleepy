import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';
import {
    LIQUID_BLOOD,
    LIQUID_HONEY,
    LIQUID_WATER,
} from '../../enums/LiquidTypes';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class ForestTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (tile.isType(TILE_TYPE_WALL)) {
            const type = Math.random() < 0.5 ? 'PineTree' : 'SmallPineTree';
            const tree = game.ecs.createPrefab(type);

            tree.position.setPos(tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (Math.random() < 0.1) {
                if (tile.isType(TILE_TYPE_FLOOR)) {
                    const stone = game.ecs.createPrefab('Stone');

                    stone.position.setPos(tile.x, tile.y);
                }
            }
        });

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                const goblin = game.ecs.createPrefab('Goblin');

                goblin.position.setPos(tile.x, tile.y);
                goblin.brain.pushGoal(BoredGoalType.create());
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                const vial = game.ecs.createPrefab('Vial');

                vial.liquidContainer.contents = LIQUID_BLOOD;
                vial.position.setPos(tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                const vial = game.ecs.createPrefab('Vial');

                vial.liquidContainer.contents = LIQUID_WATER;
                vial.position.setPos(tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                const vial = game.ecs.createPrefab('Vial');

                vial.liquidContainer.contents = LIQUID_HONEY;
                vial.position.setPos(tile.x, tile.y);
            });
        }
    }
}
