export default class Grid {
    #width = 0;
    #height = 0;
    #data = [];
    #defaultValueGenerator = () => null;

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get size() {
        return this.#width * this.#height;
    }

    get data() {
        return this.#data;
    }

    constructor(width, height, defaultValueGenerator) {
        this.#width = width;
        this.#height = height;
        this.#defaultValueGenerator = defaultValueGenerator;

        this.clear();
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
        for (let i = 0; i < this.size; i++) {
            const { x, y} = this.coord(i);

            this.#data[i] = this.#defaultValueGenerator(x, y);
        }
    }

    set(x, y, value) {
        if (this.isOutOfBounds(x, y)) {
            console.warn(
                `Trying to set out-of-bounds coordinates (${x}, ${y}) to value ${value}`
            );
            return;
        }

        const idx = this.idx(x, y);

        this.#data[idx] = value;
    }

    get(x, y) {
        if (this.isOutOfBounds(x, y)) {
            return this.defaultValueGenerator();
        }

        return this.#data[this.idx(x, y)];
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }
}
