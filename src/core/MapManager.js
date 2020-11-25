import { Map as MapGenerator } from 'rot-js';
import Manager from './Manager';
import FastMap from '../utils/FastMap';
import { BoredGoalType } from '../ai/GoalTypes';
import { Door, IsInventoried, Position } from '../ecs/components';
import { LIQUID_BLOOD, LIQUID_HONEY, LIQUID_WATER } from '../enums/LiquidTypes';
import WorldData from '../data/WorldData';
import { SCREEN_LOAD_SECTOR } from './screens/ScreenType';

export default class MapManager extends Manager {
    #playerOutOfBounds = null;
    #sector;
    #lookup;
    #width = 24;
    #height = 24;

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get sector() {
        return this.#sector;
    }

    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [Position],
        });

        this.#lookup = new FastMap(this.width, this.height);

        this.query.onEntityAdded((e) => {
            this.#lookup.set(0, 0, e.id);
        });

        this.query.onEntityRemoved((e) => {
            this.#lookup.remove(e.id);
        });
    }

    onNewGame() {
        const seed = 'hello';

        this.data = new WorldData(seed);

        const start = this.data.getStartingSector();

        this.enterSector(start);
    }

    onSaveGame() {
        return {
            map: {
                lookup: this.#lookup.serialize(),
            },
        };
    }

    onLoadGame(data) {
        this.#lookup.deserialize(data.map.lookup);
    }

    onSectorUnload(sector) {
        const data = this.#lookup.serialize();

        this.game.state.saveSectorPositionData(sector.id, data);
        this.#lookup.clear();
    }

    onSectorLoaded(sector) {
        this.#sector = sector;

        const data = this.game.state.loadSectorPositionData(sector.id);


        if (data) {
            this.#lookup.deserialize(data);
        }
    }

    enterSector(sector, entry) {
        this.#playerOutOfBounds = null;

        this.game.screens.setScreen(SCREEN_LOAD_SECTOR, {
            prevousSector: this.#sector,
            nextSector: sector,
            entry
        });
    }

    clearLookup() {
        this.#lookup.clear();
    }

    onPlayerOutOfBounds(x, y) {
        if (y < 0) {
            this.enterSector(this.sector.northSector, {
                x,
                y: this.height - 1
            });
        }
        if (y >= this.height) {
            this.enterSector(this.sector.southSector, {
                x,
                y: 0
            });
        }
        if (x >= this.width) {
            this.enterSector(this.sector.eastSector, {
                x: 0,
                y,
            });
        }
        if (x < 0) {
            this.enterSector(this.sector.westSector, {
                x: this.width - 1,
                y,
            });
        }
    }

    getPosition(entityId) {
        return this.#lookup.getPosition(entityId);
    }

    setPosition(x, y, entityId) {
        if (this.#lookup.isOutOfBounds(x, y)) {
            if (this.game.player.id === entityId) {
                this.#playerOutOfBounds = { x, y };
            }

            return;
        }

        this.#lookup.set(x, y, entityId);

        if (entityId === this.game.player.id) {
            this.game.camera.setFocus(x, y);
        }
    }

    getEntitiesAt(x, y) {
        return this.#lookup
            .get(x, y)
            .map((id) => this.game.ecs.getEntity(id))
            .filter((e) => !e.has(IsInventoried));
    }

    isAdjacent(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
    }

    getNeighborEntities(x, y) {
        return [
            this.getEntitiesAt(x - 1, y - 1), // TOP LEFT
            this.getEntitiesAt(x, y - 1), // TOP
            this.getEntitiesAt(x + 1, y - 1), // TOP RIGHT
            this.getEntitiesAt(x - 1, y), // LEFT
            this.getEntitiesAt(x + 1, y), // RIGHT
            this.getEntitiesAt(x - 1, y + 1), // BOTTOM LEFT
            this.getEntitiesAt(x, y + 1), // BOTTOM
            this.getEntitiesAt(x + 1, y + 1), // BOTTOM RIGHT
        ];
    }

    getRandomEmptyPosition() {
        let x, y;
        do {
            x = Math.trunc(Math.random() * this.width);
            y = Math.trunc(Math.random() * this.height);
        } while (this.getEntitiesAt(x, y).length > 0);

        return { x, y };
    }

    update(dt) {
        if (this.#playerOutOfBounds) {
            this.onPlayerOutOfBounds(this.#playerOutOfBounds.x, this.#playerOutOfBounds.y);
        }
    }
}
