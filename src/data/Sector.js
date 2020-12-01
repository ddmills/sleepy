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

        const settings = {
            width: game.map.width,
            height: game.map.height,
            exits,
        };

        const tiles = generator.generate(settings);

        generator.populate(settings, tiles);

        this.tiles = tiles;
    }

    static parseData(world, data, x, y) {
        const sector = new Sector(world, x, y);

        sector.connectionsNorth = data.connectionsNorth;
        sector.connectionsWest = data.connectionsWest;
        sector.generator = data.generator;

        return sector;
    }
}
