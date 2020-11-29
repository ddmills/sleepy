import { BoredGoalType } from '../ai/GoalTypes';
import { game } from '../core/Game';
import { LIQUID_BLOOD, LIQUID_HONEY, LIQUID_WATER } from '../enums/LiquidTypes';
import { getGenerator } from '../level/generators/generators';
import CastleTheme from '../level/themes/CastleTheme';
import { getThemePopulator } from '../level/themes/TileTheme';

export class Sector {
    #x = 0;
    #y = 0;
    connectionsNorth = [];
    connectionsWest = [];
    generator = {};

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get id() {
        return this.world.idx(this.x, this.y);
    }

    get northSector() {
        return this.world.getSectorByCoord(this.#x, this.#y - 1);
    }

    get southSector() {
        return this.world.getSectorByCoord(this.#x, this.#y + 1);
    }

    get eastSector() {
        return this.world.getSectorByCoord(this.#x + 1, this.#y);
    }

    get westSector() {
        return this.world.getSectorByCoord(this.#x - 1, this.#y);
    }

    constructor(world, x, y) {
        this.world = world;
        this.#x = x;
        this.#y = y;
    }

    getExits() {
        const exits = [];

        // north
        exits.push(...this.connectionsNorth.map((c) => ({
            x: 12,
            y: 0,
        })));

        // west
        exits.push(...this.connectionsWest.map((c) => ({
            x: 0,
            y: 12,
        })));

        // east
        exits.push(...this.eastSector.connectionsWest.map((c) => ({
            x: game.map.width - 1,
            y: 12,
        })));

        // south
        exits.push(...this.southSector.connectionsNorth.map((c) => ({
            x: 12,
            y: game.map.height - 1,
        })));

        return exits;
    }

    generate(game) {
        const exits = this.getExits();
        const generator = getGenerator(this.generator.type);

        const tiles = generator.generate({
            width: game.map.width,
            height: game.map.height,
            exits,
        });

        tiles.rooms.forEach((room) => {
            const theme = getThemePopulator(room.theme);

            theme.populateRoom(room);
        });

        tiles.getUnassignedTiles().forEach((tile) => {
            const theme = getThemePopulator(tile.theme);

            theme.populateTile(tile);
        });

        // for (let i = 0; i < 3; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const chest = game.ecs.createPrefab('Chest');

        //     const stone = game.ecs.createPrefab('Stone');
        //     const vial = game.ecs.createPrefab('Vial');
        //     vial.liquidContainer.contents = LIQUID_HONEY;

        //     chest.position.setPos(position.x, position.y);
        //     chest.inventory.addLoot(vial);
        //     chest.inventory.addLoot(stone);
        // }

        // for (let i = 0; i < 3; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const vial = game.ecs.createPrefab('Vial');

        //     vial.liquidContainer.contents = LIQUID_BLOOD;
        //     vial.position.setPos(position.x, position.y);
        // }

        // for (let i = 0; i < 3; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const vial = game.ecs.createPrefab('Vial');

        //     vial.liquidContainer.contents = LIQUID_WATER;
        //     vial.position.setPos(position.x, position.y);
        // }

        // for (let i = 0; i < 3; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const vial = game.ecs.createPrefab('Vial');

        //     vial.liquidContainer.contents = LIQUID_HONEY;
        //     vial.position.setPos(position.x, position.y);
        // }

        // for (let i = 0; i < 6; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const wanderer = game.ecs.createPrefab('HumanWanderer');

        //     wanderer.position.setPos(position.x, position.y);
        //     wanderer.brain.pushGoal(BoredGoalType.create());
        // }

        // for (let i = 0; i < 5; i++) {
        //     const position = game.map.getRandomEmptyPosition();
        //     const goblin = game.ecs.createPrefab('Goblin');

        //     goblin.position.setPos(position.x, position.y);
        //     goblin.brain.pushGoal(BoredGoalType.create());
        // }
    }

    static parseData(world, data, x, y) {
        const sector = new Sector(world, x, y);

        sector.connectionsNorth = data.connectionsNorth;
        sector.connectionsWest = data.connectionsWest;
        sector.generator = data.generator;

        return sector;
    }
}
