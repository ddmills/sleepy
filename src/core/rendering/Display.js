export default class Display {
    #ctx;
    #canvas;
    #width;
    #height;
    #tileWidth;
    #tileHeight;

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

    constructor({width, height, tileWidth, tileHeight}) {
        this.#width = width;
        this.#height = height;
        this.#tileWidth = tileWidth;
        this.#tileHeight = tileHeight;

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

    draw(x, y, char, fg = '#eee', bg) {
        // this.clearTile(x, y);
        // this.ctx.fillStyle = '#333';
        // this.ctx.fillRect(
        //     x * this.tileWidth,
        //     y * this.tileHeight,
        //     this.tileWidth,
        //     this.tileHeight
        // );

        this.ctx.fillStyle = fg;
        this.ctx.fillText(
            char,
            x * this.tileWidth,
            y * this.tileHeight
        );
    }

    drawText(x, y, text, fg = '#eee', bg) {
        this.ctx.fillStyle = fg;
        for (let i = 0; i < text.length; i++) {
            this.draw(
                x + i,
                y,
                text.charAt(i),
                fg,
                bg
            );
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
