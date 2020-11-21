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
        return y * this.width + x;
    }

    coord(idx) {
        return {
            x: Math.trunc(idx % this.width),
            y: Math.trunc(idx / this.width),
        };
    }

    clear() {
        this.#idHash.clear();

        for (let i = 0; i < this.size; i++) {
            this.#data[i].clear();
        }
    }

    serialize() {
        const entries = this.#data.map((d) => Array.from(d));

        return {
            width: this.width,
            height: this.height,
            entries,
        };
    }

    deserialize(data) {
        this.#width = data.width;
        this.#height = data.height;
        this.#idHash = new Map();

        for (let i = 0; i < data.entries.length; i++) {
            const coord = this.coord(i);
            this.#data[i] = new Set(data.entries[i]);

            data.entries[i].forEach((id) => {
                this.#idHash.set(id, coord);
            });
        }
    }

    set(x, y, id) {
        if (this.isOutOfBounds(x, y)) {
            console.warn(
                `Trying to set an entity ${id} position out-of-bounds ${x}, ${y}`
            );
            return;
        }

        const idx = this.idx(x, y);

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

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }
}
