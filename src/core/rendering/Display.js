export default class Display {
    #ctx;
    #canvas;
    #width;
    #height;
    #tileWidth;
    #tileHeight;
    #defaultFg;

    get tileWidth() {
        return this.#tileWidth;
    }

    get tileHeight() {
        return this.#tileHeight;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get canvas() {
        return this.#canvas;
    }

    get ctx() {
        return this.#ctx;
    }

    constructor({ width, height, tileWidth, tileHeight, defaultFg }) {
        this.#width = width;
        this.#height = height;
        this.#tileWidth = tileWidth;
        this.#tileHeight = tileHeight;
        this.#defaultFg = defaultFg || '#fff';

        this.#canvas = document.createElement('canvas');
        this.#ctx = this.canvas.getContext('2d');

        const widthPx = this.tileWidth * this.width;
        const heightPx = this.tileHeight * this.height;

        this.canvas.style.cssText = `width: ${widthPx}px; height: ${heightPx}px`;
        this.canvas.width = widthPx;
        this.canvas.height = heightPx;

        this.ctx.font = `${this.#tileHeight}px monospace`;
        this.ctx.textBaseline = 'top';
    }

    drawSprite(x, y, sprite, fg1 = '#d6d6d6', fg2 = 'red', bg) {
        const pixelX = x * this.tileWidth;
        const pixelY = y * this.tileHeight;

        const img = sprite.colorize(fg1, fg2);

        this.ctx.fillStyle = '#0b1717';
        this.ctx.fillRect(pixelX, pixelY, img.width, img.height);
        this.ctx.putImageData(img, pixelX, pixelY);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#0b1717';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clearTile(x, y) {
        this.ctx.clearRect(
            x * this.tileWidth,
            y * this.tileHeight,
            this.tileWidth,
            this.tileHeight
        );
    }
}
