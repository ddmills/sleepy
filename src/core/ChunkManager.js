import Chunk from '../data/Chunk';
import Grid from '../utils/Grid';
import Manager from './Manager';

export default class ChunkManager extends Manager {
    chunkWidth = 8;
    chunkHeight = 8;

    chunkCountX = 16;
    chunkCountY = 16;

    chunkX = 2;
    chunkY = 2;

    constructor(game) {
        super(game);
        this.chunks = new Grid(this.chunkCountX, this.chunkCountY);

        for (let x = 0; x < this.chunkCountX; x++) {
            for (let y = 0; y < this.chunkCountY; y++) {
                const id = this.chunks.idx(x, y);
                const chunk = new Chunk(id, x, y, this.chunkWidth, this.chunkHeight);

                this.chunks.set(x, y, chunk);
            }
        }
    }

    chunkCoordinate(worldX, worldY) {
        return {
            x: Math.floor(worldX / this.chunkWidth),
            y: Math.floor(worldY / this.chunkHeight),
        };
    }

    localCoordinate(worldX, worldY) {
        return {
            x: worldX % this.chunkWidth,
            y: worldY % this.chunkHeight,
        };
    }

    getPosition(entityId, chunkId) {
        const chunkCoord = this.chunks.coord(chunkId);
        const chunk = this.getChunk(chunkCoord.x, chunkCoord.y);
        const local = chunk.getPosition(entityId);

        return {
            x: local.x + chunkCoord.x * this.chunkWidth,
            y: local.y + chunkCoord.y * this.chunkHeight,
        };
    }

    setPosition(x, y, entityId, chunkId) {
        const chunkPos = this.chunkCoordinate(x, y);
        const local = this.localCoordinate(x, y);
        const chunk = this.getChunk(chunkPos.x, chunkPos.y);

        if (!chunk) {
            return;
        }

        if (chunkId !== chunk.id) {
            const oldChunkCoord = this.chunks.coord(chunkId);
            const old = this.getChunk(oldChunkCoord.x, oldChunkCoord.y);

            old.removeEntity(entityId);
        }

        // TODO: should not have to lookup entity here
        const entity = this.game.ecs.getEntity(entityId);
        entity.position.chunkId = chunk.id;

        chunk.setPosition(local.x, local.y, entityId);
    }

    getEntitiesAt(x, y, includeGround = false) {
        if (x < 0 || y < 0) {
            return [];
        }

        const chunkPos = this.chunkCoordinate(x, y);
        const local = this.localCoordinate(x, y);
        const chunk = this.getChunk(chunkPos.x, chunkPos.y);

        if (!chunk) {
            return [];
        }

        return chunk.getEntitiesAt(local.x, local.y, includeGround);
    }

    getSetupData() {
        return {};
    }

    getChunk(chunkX, chunkY) {
        const chunk = this.chunks.get(chunkX, chunkY);

        if (chunk && !chunk.isLoaded) {
            chunk.load();
        }

        return chunk;
    }

    update(dt) {
        const loaded = this.chunks.data.filter((c) => c.isLoaded);


        loaded.forEach((chunk) => {
            const c1 = game.camera.left < chunk.right;
            const c2 = game.camera.right > chunk.left;
            const c3 = game.camera.top < chunk.bottom;
            const c4 = game.camera.bottom > chunk.top;

            const intersects = c1 && c2 && c3 && c4;

            if (!intersects) {
                chunk.unload();
            }
        });
    }
}
