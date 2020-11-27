import Manager from './Manager';
import FastMap from '../utils/FastMap';
import { IsInventoried, Position } from '../ecs/components';

export default class MapManager extends Manager {
    #playerOutOfBounds = null;
    #lookup;
    #width = 48;
    #height = 48;

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
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

    getSetupData() {
        return {};
    }

    teardown() {
        this.#playerOutOfBounds = false;
        this.#lookup.clear();
    }

    setup(data) {
        if (data.playerPosition) {
            this.game.player.entity.position.setPos(data.playerPosition.x, data.playerPosition.y);
        } else {
            const position = this.getRandomEmptyPosition();
            this.game.player.entity.position.setPos(position.x, position.y);
        }

        this.game.FOVSystem.computeFOV();
    }

    getSaveGameData() {
        const data = this.#lookup.serialize();

        this.game.state.saveSectorPositionData(this.game.world.sectorId, data);

        return {
            playerPosition: this.game.player.position,
        };
    }

    onSectorLoaded(sector) {
        this.#playerOutOfBounds = false;

        const data = this.game.state.loadSectorPositionData(sector.id);

        if (data) {
            this.#lookup.deserialize(data);
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

    onPlayerOutOfBounds(x, y) {
        if (y < 0) {
            this.game.world.enterSector(this.game.world.sector.northSector, {
                x,
                y: this.height - 1
            });
        }
        if (y >= this.height) {
            this.game.world.enterSector(this.game.world.sector.southSector, {
                x,
                y: 0
            });
        }
        if (x >= this.width) {
            this.game.world.enterSector(this.game.world.sector.eastSector, {
                x: 0,
                y,
            });
        }
        if (x < 0) {
            this.game.world.enterSector(this.game.world.sector.westSector, {
                x: this.width - 1,
                y,
            });
        }
    }

    update(dt) {
        if (this.#playerOutOfBounds) {
            this.onPlayerOutOfBounds(this.#playerOutOfBounds.x, this.#playerOutOfBounds.y);
        }
    }
}
