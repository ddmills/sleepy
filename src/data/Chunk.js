import { game } from '../core/Game';
import { generateChunk } from '../level/ChunkGenerator';
import FastMap from '../utils/FastMap';

export default class Chunk {
    get worldX() {
        return this.width * this.x;
    }

    get worldY() {
        return this.height * this.y;
    }

    get left() {
        return this.width * this.x;
    }

    get right() {
        return this.width * this.x + this.width;
    }

    get top() {
        return this.height * this.y;
    }

    get bottom() {
        return this.height * this.y + this.height;
    }

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
        if (this.isLoaded) {
            console.log('chunk is already loaded.');
            return;
        }

        console.log(`load chunk ${this.id} (${this.x}, ${this.y})`);

        const saved = game.state.loadChunkPositionData(this.id);

        if (!saved) {
            generateChunk(this);
        } else {
            this.data.deserialize(saved);

            const entityData = game.state.loadChunkEntityData(this.id);

            game.ecs.deserialize(entityData);
        }

        this.isLoaded = true;
    }

    unload() {
        if (!this.isLoaded) {
            console.log('chunk is already un-loaded.');
            return;
        }

        console.log(`unload chunk ${this.id} (${this.x}, ${this.y})`);

        const entityIds = this.data.getValues();

        const entities = entityIds.map((id) => {
            return game.ecs.getEntity(id);
        });

        const serialized = game.ecs.serialize(entities);

        game.state.saveChunkPositionData(this.id, this.data.serialize());
        game.state.saveChunkEntityData(this.id, serialized);

        entities.forEach((e) => e.destroy());

        this.isLoaded = false;
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
