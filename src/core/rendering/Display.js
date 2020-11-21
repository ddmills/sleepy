export default class Display {
    #ctx;
    #canvas;
    #canvasDirty;
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

    draw(x, y, sprite, fg1, fg2, bg) {
        const pixelX = x * this.tileWidth;
        const pixelY = y * this.tileHeight;

        const img = sprite.colorize(fg1, fg2);

        if (bg) {
            this.ctx.fillStyle = bg;
            this.ctx.fillRect(pixelX, pixelY, sprite.width, sprite.height);
        } else {
            this.ctx.clearRect(pixelX, pixelY, this.tileWidth, this.tileHeight);
        }

        this.ctx.drawImage(img, pixelX, pixelY);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clearArea(x, y, width, height) {
        this.ctx.clearRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth * width, this.tileHeight * height);
    }

    fillTile(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.tileWidth, this.tileHeight);
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
