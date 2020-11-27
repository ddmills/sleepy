import { BoredGoalType } from '../ai/GoalTypes';
import { Blocker, Door } from '../ecs/components';
import { LIQUID_BLOOD, LIQUID_HONEY, LIQUID_WATER } from '../enums/LiquidTypes';
import ForestTheme from '../level/themes/ForestTheme';
import { getGenerator } from '../level/generators/mapping';

export class Sector {
    #x = 0;
    #y = 0;
    connectionsNorth = [];
    connectionsWest = [];
    composition = {};

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

    getConnections() {
        return {
            north: this.connectionsNorth,
            east: this.eastSector.connectionsWest,
            west: this.connectionsWest,
            south: this.southSector.connectionsNorth,
        };
    }

    generate(game) {
        const connections = this.getConnections();

        const generator = getGenerator(this.composition.type);

        const tiles = generator.generate({
            width: game.map.width,
            height: game.map.height,
            connections
        });

        ForestTheme.populate(tiles);


        for (let i = 0; i < 8; i++) {
            const position = game.map.getRandomEmptyPosition();
            const stone = game.ecs.createPrefab('Stone');

            stone.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 3; i++) {
            const position = game.map.getRandomEmptyPosition();
            const chest = game.ecs.createPrefab('Chest');

            const stone = game.ecs.createPrefab('Stone');
            const vial = game.ecs.createPrefab('Vial');
            vial.liquidContainer.contents = LIQUID_HONEY;

            chest.position.setPos(position.x, position.y);
            chest.inventory.addLoot(vial);
            chest.inventory.addLoot(stone);
        }

        for (let i = 0; i < 3; i++) {
            const position = game.map.getRandomEmptyPosition();
            const vial = game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_BLOOD;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 3; i++) {
            const position = game.map.getRandomEmptyPosition();
            const vial = game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_WATER;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 3; i++) {
            const position = game.map.getRandomEmptyPosition();
            const vial = game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_HONEY;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 6; i++) {
            const position = game.map.getRandomEmptyPosition();
            const wanderer = game.ecs.createPrefab('HumanWanderer');

            wanderer.position.setPos(position.x, position.y);
            wanderer.brain.pushGoal(BoredGoalType.create());
        }

        for (let i = 0; i < 5; i++) {
            const position = game.map.getRandomEmptyPosition();
            const goblin = game.ecs.createPrefab('Goblin');

            goblin.position.setPos(position.x, position.y);
            goblin.brain.pushGoal(BoredGoalType.create());
        }
    }

    static parseData(world, data, x, y) {
        const sector = new Sector(world, x, y);

        sector.connectionsNorth = data.connectionsNorth;
        sector.connectionsWest = data.connectionsWest;
        sector.composition = data.composition;

        return sector;
    }
}
