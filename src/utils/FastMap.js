export default class FastMap {
    _width = 0;
    _height = 0;
    _data = [];
    _idHash = new Map();

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get size() {
        return this._width * this._height;
    }

    constructor(width, height) {
        this._width = width;
        this._height = height;

        for (let i = 0; i < this.size; i++) {
            this._data[i] = new Set();
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

    getValues() {
        return Array.from(this._idHash.keys());
    }

    clear() {
        this._idHash.clear();

        for (let i = 0; i < this.size; i++) {
            this._data[i].clear();
        }
    }

    serialize() {
        const entries = this._data.map((d) => Array.from(d));

        return {
            width: this.width,
            height: this.height,
            entries,
        };
    }

    deserialize(data) {
        this._width = data.width;
        this._height = data.height;
        this._idHash = new Map();

        for (let i = 0; i < data.entries.length; i++) {
            const coord = this.coord(i);
            this._data[i] = new Set(data.entries[i]);

            data.entries[i].forEach((id) => {
                this._idHash.set(id, coord);
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

        this._idHash.set(id, { x, y });
        this._data[idx].add(id);
    }

    get(x, y) {
        if (this.isOutOfBounds(x, y)) {
            return [];
        }

        return Array.from(this._data[this.idx(x, y)]);
    }

    has(id) {
        return this._idHash.has(id);
    }

    getPosition(id) {
        const pos = this._idHash.get(id);

        if (!pos) {
            console.warn('Cannot get position', id);
        }

        return pos;
    }

    remove(id) {
        if (!this.has(id)) {
            return;
        }

        const pos = this.getPosition(id);
        const idx = this.idx(pos.x, pos.y);

        this._idHash.delete(id);
        this._data[idx].delete(id);
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }
}
