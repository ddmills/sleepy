import Manager from './Manager';
import FastMap from '../utils/FastMap';
import { IsInventoried, Position } from '../ecs/components';

export default class MapManager extends Manager {
    #playerOutOfBounds = null;
    positions;
    #width = 32;
    #height = 32;

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
            none: [IsInventoried],
        });

        this.positions = new FastMap(this.width, this.height);

        this.query.onEntityAdded((e) => {
            this.positions.set(0, 0, e.id);
        });

        this.query.onEntityRemoved((e) => {
            this.positions.remove(e.id);
        });
    }

    getSetupData() {
        return {};
    }

    teardown() {
        this.#playerOutOfBounds = false;
        this.positions.clear();
    }

    setup(data) {
        if (data.playerPosition) {
            this.game.player.entity.position.setPos(
                data.playerPosition.x,
                data.playerPosition.y
            );
        } else {
            const position = this.getRandomEmptyPosition();
            this.game.player.entity.position.setPos(position.x, position.y);
        }

        this.game.FOVSystem.computeFOV();
    }

    getSaveGameData() {
        const data = this.positions.serialize();

        this.game.state.saveSectorPositionData(this.game.world.sectorId, data);

        return {
            playerPosition: this.game.player.position,
        };
    }

    onSectorLoaded(sector) {
        this.#playerOutOfBounds = false;

        const data = this.game.state.loadSectorPositionData(sector.id);

        if (data) {
            this.positions.deserialize(data);
        }
    }

    getPosition(entityId) {
        return this.positions.getPosition(entityId);
    }

    setPosition(x, y, entityId) {
        if (this.positions.isOutOfBounds(x, y)) {
            if (this.game.player.id === entityId) {
                this.#playerOutOfBounds = { x, y };
            }

            return;
        }

        this.positions.set(x, y, entityId);

        if (entityId === this.game.player.id) {
            this.game.camera.setFocus(x, y);
        }
    }

    getEntitiesAt(x, y, includeGround = false) {
        return this.positions.get(x, y).reduce((entities, id) => {
            const e = this.game.ecs.getEntity(id);

            if (!e.isInventoried && (includeGround ? true : !e.ground)) {
                entities.push(e);
            }

            return entities;
        }, []);
    }

    isAdjacent(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
    }

    getEntitiesInRect(x, y, width, height) {
        const entities = [];

        for (let i = x; i < x + width + 1; i++) {
            for (let j = y; j < y + height + 1; j++) {
                entities.push(...this.getEntitiesAt(i, j));
            }
        }

        return entities;
    }

    getEntitiesInRange(x, y, range) {
        const diameter = range * 2;

        return this.getEntitiesInRect(x - range, y - range, diameter, diameter);
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
        } while (this.getEntitiesAt(x, y, false).length > 0);

        return { x, y };
    }

    isOutOfbounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    onPlayerOutOfBounds(x, y) {
        if (y < 0) {
            this.game.world.enterSector(this.game.world.sector.northSector, {
                x,
                y: this.height - 1,
            });
        }
        if (y >= this.height) {
            this.game.world.enterSector(this.game.world.sector.southSector, {
                x,
                y: 0,
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
            this.onPlayerOutOfBounds(
                this.#playerOutOfBounds.x,
                this.#playerOutOfBounds.y
            );
        }
    }
}
