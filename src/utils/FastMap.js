export default class FastMap {
    #width = 0;
    #height = 0;
    #data = [];
    #idHash = new Map();

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get size() {
        return this.#width * this.#height;
    }

    constructor(width, height) {
        this.#width = width;
        this.#height = height;

        for (let i = 0; i < this.size; i++) {
            this.#data[i] = new Set();
        }
    }

    idx(x, y) {
        return (y * this.width) + x;
    }

    coord(idx) {
        return {
            x: Math.trunc(idx % this.width),
            y: Math.trunc(idx / this.width)
        };
    }

    clear() {
        this.#idHash.clear();

        for (let i = 0; i < this.size; i++) {
            this.#data[i].clear();
        }
    }

    set(x, y, id) {
        const idx = this.idx(x, y);

        if (this.isIdxOutOfBounds(idx)) {
            console.warn(`Trying to set an entity ${id} position out-of-bounds ${x}, ${y}`);
            return;
        }

        this.remove(id);

        this.#idHash.set(id, { x, y });
        this.#data[idx].add(id);
    }

    get(x, y) {
        if (this.isOutOfBounds(x, y)) {
            return [];
        }

        return Array.from(this.#data[this.idx(x, y)]);
    }

    has(id) {
        return this.#idHash.has(id);
    }

    getPosition(id) {
        return this.#idHash.get(id);
    }

    remove(id) {
        if (!this.has(id)) {
            return;
        }

        const pos = this.getPosition(id);
        const idx = this.idx(pos.x, pos.y);

        this.#idHash.delete(id);
        this.#data[idx].delete(id);
    }

    isIdxOutOfBounds(idx) {
        return idx < 0 || idx > this.size;
    }

    isOutOfBounds(x, y) {
        const idx = this.idx(x, y);

        return this.isIdxOutOfBounds(idx);
    }
}
