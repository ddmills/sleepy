import { game } from '../core/Game';
import { getGenerator } from '../level/generators/generators';

export class Area {
    #x = 0;
    #y = 0;
    connectionsNorth = [];
    connectionsWest = [];
    generator = {};
    music = null;

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get id() {
        return this.world.idx(this.x, this.y);
    }

    get northArea() {
        return this.world.getAreaByCoord(this.#x, this.#y - 1);
    }

    get southArea() {
        return this.world.getAreaByCoord(this.#x, this.#y + 1);
    }

    get eastArea() {
        return this.world.getAreaByCoord(this.#x + 1, this.#y);
    }

    get westArea() {
        return this.world.getAreaByCoord(this.#x - 1, this.#y);
    }

    constructor(world, x, y) {
        this.world = world;
        this.#x = x;
        this.#y = y;
    }

    getExits() {
        const exits = [];

        // north
        exits.push(
            ...this.connectionsNorth.map((c) => ({
                x: 12,
                y: 0,
            }))
        );

        // west
        exits.push(
            ...this.connectionsWest.map((c) => ({
                x: 0,
                y: 12,
            }))
        );

        // east
        exits.push(
            ...this.eastArea.connectionsWest.map((c) => ({
                x: game.map.width - 1,
                y: 12,
            }))
        );

        // south
        exits.push(
            ...this.southArea.connectionsNorth.map((c) => ({
                x: 12,
                y: game.map.height - 1,
            }))
        );

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
        const area = new Area(world, x, y);

        area.connectionsNorth = data.connectionsNorth;
        area.connectionsWest = data.connectionsWest;
        area.generator = data.generator;
        area.music = data.music;
        area.temperature = data.temperature;

        return area;
    }
}
