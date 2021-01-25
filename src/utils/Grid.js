export default class Grid {
    _width = 0;
    _height = 0;
    data = [];
    suppressOOBWarn = false;
    defaultValueGenerator = () => null;

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get size() {
        return this._width * this._height;
    }

    constructor(width, height, defaultValueGenerator = () => null) {
        this._width = width;
        this._height = height;
        this.defaultValueGenerator = defaultValueGenerator;

        this.clear();
    }

    idx(x, y) {
        return y * this._width + x;
    }

    coord(idx) {
        return {
            x: Math.trunc(idx % this._width),
            y: Math.trunc(idx / this._width),
        };
    }

    clear() {
        this.data = [];

        for (let i = 0; i < this.size; i++) {
            const { x, y } = this.coord(i);

            this.data[i] = this.defaultValueGenerator(x, y, this.idx(x, y));
        }
    }

    setAll(value) {
        this.data = [];

        for (let i = 0; i < this.size; i++) {
            this.data[i] = value;
        }
    }

    set(x, y, value) {
        if (this.isOutOfBounds(x, y)) {
            if (!this.suppressOOBWarn) {
                console.warn(
                    `Trying to set out-of-bounds coordinates (${x}, ${y}) to value ${value}`
                );
            }
            return;
        }

        const idx = this.idx(x, y);

        this.data[idx] = value;
    }

    serialize() {
        const entries = [...this.data];

        return {
            width: this.width,
            height: this.height,
            entries,
        };
    }

    deserialize(data) {
        this._width = data.width;
        this._height = data.height;
        this.data = data.entries;
    }

    get(x, y) {
        if (this.isOutOfBounds(x, y)) {
            return this.defaultValueGenerator();
        }

        return this.data[this.idx(x, y)];
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this._width || y >= this.height;
    }

    getNeighbors(x, y) {
        return [
            this.get(x - 1, y - 1), // TOP LEFT
            this.get(x, y - 1), // TOP
            this.get(x + 1, y - 1), // TOP RIGHT
            this.get(x - 1, y), // LEFT
            this.get(x + 1, y), // RIGHT
            this.get(x - 1, y + 1), // BOTTOM LEFT
            this.get(x, y + 1), // BOTTOM
            this.get(x + 1, y + 1), // BOTTOM RIGHT
        ];
    }

    clearAndResize(width, height) {
        this._width = width;
        this._height = height;
        this.clear();
    }
}
