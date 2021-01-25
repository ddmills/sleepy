import { game } from '../core/Game';
import FastMap from '../utils/FastMap';
import { SPWN_GROUND_GRASS_DEAD } from './Spawnables';
import { spawnForChunk } from './Spawner';

export default class Chunk {
    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.data = new FastMap(width, height);
        this.isLoaded = false;
    }

    load() {
        console.log(`load chunk ${this.id} (${this.x}, ${this.y})`);

        const saved = game.state.loadChunkPositionData(this.id);

        if (!saved) {
            this.data = new FastMap(this.width, this.height);

            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.width; y++) {
                    spawnForChunk(SPWN_GROUND_GRASS_DEAD, x, y, {}, this);
                }
            }
        }

        this.isLoaded = true;

        return saved;
    }

    removeEntity(entityId) {
        this.data.remove(entityId);
    }

    getPosition(entityId) {
        if (!this.isLoaded) {
            this.load();
        }

        return this.data.getPosition(entityId);
    }

    setPosition(x, y, entityId) {
        this.data.set(x, y, entityId);
    }

    getEntitiesAt(x, y, includeGround = false) {
        return this.data.get(x, y).reduce((entities, id) => {
            const e = game.ecs.getEntity(id);

            if (!e.isInventoried && (includeGround ? true : !e.ground)) {
                entities.push(e);
            }

            return entities;
        }, []);
    }
}
