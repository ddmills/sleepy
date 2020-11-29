import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';
import { LIQUID_HONEY } from '../../enums/LiquidTypes';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CabinTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                const wall = game.ecs.createPrefab('WoodWall');

                wall.position.setPos(tile.x, tile.y);
            }
        }
    }

    static populateRoom(room) {
        room.exits.forEach((exit) => {
            const door = game.ecs.createPrefab('Door');

            if (this.getEntities(exit).length === 0) {
                door.position.setPos(exit.x, exit.y);
            }
        });

        room.borderTiles.forEach((tile) => this.populateTile(tile));

        this.trySpawn(room, (tile) => {
            const chest = game.ecs.createPrefab('Chest');
            const stone = game.ecs.createPrefab('Stone');
            const vial = game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_HONEY;
            chest.position.setPos(tile.x, tile.y);
            chest.inventory.addLoot(vial);
            chest.inventory.addLoot(stone);
        });

        for (let i = 0; i < randomInt(0, 3); i++) {
            this.trySpawn(room, (tile) => {
                const wanderer = game.ecs.createPrefab('HumanWanderer');

                wanderer.position.setPos(tile.x, tile.y);
                wanderer.brain.pushGoal(BoredGoalType.create());
            });
        }
    }
}
