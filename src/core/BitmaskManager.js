import { getMaskGlyph } from '../data/bitmasks';
import { BitmaskGlyph, Explored, IsDestroying, IsInventoried, Position } from '../ecs/components';
import Manager from './Manager';

export default class BitmaskManager extends Manager {
    constructor(game) {
        super(game);
        this.query = game.ecs.createQuery({
            all: [BitmaskGlyph, Position, Explored],
            none: [IsInventoried, IsDestroying],
        });

        this.query.onEntityRemoved((entity) => {
            if (entity.isDestroying || entity.IsInventoried) {
                this.refreshMaskAndNeighbors(entity);
            }
        });
    }


    getMaskNeighbors(x, y, key) {
        const neighbors = this.game.map.getNeighborEntities(x, y);

        return neighbors.map((list) => {
            return list.filter((e) => e.explored && e.bitmaskGlyph && e.bitmaskGlyph.key === key && !e.isDestroying);
        });
    }

    refreshMaskAndNeighbors(entity) {
        const key = entity.bitmaskGlyph.key;
        const pos = entity.position.getPos();

        this.refreshMask(entity);

        const neighbors = this.getMaskNeighbors(pos.x, pos.y, key);

        neighbors.flat().forEach((neighbor) => {
            this.refreshMask(neighbor);
        });
    }

    refreshMask(entity) {
        const key = entity.bitmaskGlyph.key;
        const pos = entity.position.getPos();
        const neighbors = this.getMaskNeighbors(pos.x, pos.y, key);
        const mask = this.sumMask(neighbors);

        if (entity.bitmaskGlyph.updateGlyph) {
            entity.glyph.ch = getMaskGlyph(key, mask);
        }
    }

    sumMask(neighbors) {
        return neighbors.reduce((sum, cell, idx) => {
            return cell.length ? sum + (2 ** idx) : sum;
        }, 0);
    }

    refreshAll() {
        this.query.get().forEach((entity) => {
            this.refreshMask(entity);
        });
    }
}
