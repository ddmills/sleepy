import { Map as MapGenerator, RNG } from 'rot-js';
import { BoredGoalType } from '../ai/GoalTypes';
import { Blocker, Door } from '../ecs/components';
import { LIQUID_BLOOD, LIQUID_HONEY, LIQUID_WATER } from '../enums/LiquidTypes';

export class Sector {
    #x = 0;
    #y = 0;
    connectionsNorth = [];
    connectionsWest = [];

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
        }
    }

    generate(game) {
        const generator = new MapGenerator.Uniform(game.map.width, game.map.height, {
            timeLimit: 8000,
            roomWidth: [2, 8],
            roomHeight: [2, 8],
            roomDugPercentage: 0.8,
        });

        generator.create((x, y, v) => {
            if (v !== 1) {
                return;
            }

            const type = Math.random() < 0.5 ? 'PineTree' : 'SmallPineTree';
            const entity = game.ecs.createPrefab(type);

            entity.position.setPos(x, y);
        });

        const connections = this.getConnections();

        const northPaths = connections.north.map((north) => {
            // dig south from top until hit empty
            for (let i = 0; i < game.map.height; i++) {
                const blockers = game.map.getEntitiesAt(12, i).filter((e) => e.has(Blocker));

                if (blockers.length > 0) {
                    blockers.forEach((b) => b.destroy());
                } else {
                    return true;
                }
            }

            return false;
        });

        if (northPaths.some((isConnected) => isConnected === false)) {
            console.log('CONNECTION north FAILED! regenerate');
        }

        const southPaths = connections.south.map((south) => {
            // dig north from bottom until hit empty
            for (let i = game.map.height - 1; i > 0; i--) {
                const blockers = game.map.getEntitiesAt(12, i).filter((e) => e.has(Blocker));

                if (blockers.length > 0) {
                    blockers.forEach((b) => b.destroy());
                } else {
                    return true;
                }
            }

            return false;
        });

        if (southPaths.some((isConnected) => isConnected === false)) {
            console.log('CONNECTION south FAILED! regenerate');
        }

        const westPaths = connections.west.map((west) => {
            // dig east from left until hit empty
            for (let i = 0; i < game.map.width; i++) {
                const blockers = game.map.getEntitiesAt(i, 12).filter((e) => e.has(Blocker));

                if (blockers.length > 0) {
                    blockers.forEach((b) => b.destroy());
                } else {
                    return true;
                }
            }

            return false;
        });

        if (westPaths.some((isConnected) => isConnected === false)) {
            console.log('CONNECTION west FAILED! regenerate');
        }

        const eastPaths = connections.east.map((east) => {
            // dig west from right until hit empty
            for (let i = game.map.width - 1; i > 0; i--) {
                const blockers = game.map.getEntitiesAt(i, 12).filter((e) => e.has(Blocker));

                if (blockers.length > 0) {
                    blockers.forEach((b) => b.destroy());
                } else {
                    return true;
                }
            }

            return false;
        });

        if (eastPaths.some((isConnected) => isConnected === false)) {
            console.log('CONNECTION east FAILED! regenerate');
        }


        var rooms = generator.getRooms();
        for (var i = 0; i < rooms.length; i++) {
            var room = rooms[i];

            room.getDoors((x, y) => {
                const hasDoor = game.map.getEntitiesAt(x, y).some((e) =>
                    e.has(Door)
                );

                if (hasDoor) {
                    return;
                }

                if (Math.random() > .25) {
                    return;
                }

                const door = game.ecs.createPrefab('Door');
                door.position.setPos(x, y);
            });
        }

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

        return sector;
    }
}
