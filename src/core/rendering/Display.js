export default class Display {
    ctx;
    canvas;
    width;
    height;
    tileWidth;
    tileHeight;
    _dirtyCells = new Set();
    clearColor = '#141a23';

    constructor({ width, height, tileWidth, tileHeight }) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d', { alpha: false });

        this.ctx.font = `${this.tileHeight}px monospace`;
        this.ctx.textBaseline = 'top';

        this.setSize(width, height);
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;

        const widthPx = this.tileWidth * this.width;
        const heightPx = this.tileHeight * this.height;

        this.canvas.style.cssText = `width: ${widthPx}px; height: ${heightPx}px`;
        this.canvas.width = widthPx;
        this.canvas.height = heightPx;
    }

    draw(x, y, sprite, fg1, fg2, bg) {
        const pixelX = x * this.tileWidth;
        const pixelY = y * this.tileHeight;

        const img = sprite.colorize(fg1, fg2);

        this.ctx.fillStyle = bg || this.clearColor;

        if (this.isDirty(x, y) || bg) {
            this.ctx.fillRect(pixelX, pixelY, sprite.width, sprite.height);
        }

        this.ctx.drawImage(img, pixelX, pixelY);
        this._markDirty(x, y);
    }

    clear() {
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this._dirtyCells.clear();
    }

    clearArea(x, y, width, height) {
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(
            x * this.tileWidth,
            y * this.tileHeight,
            this.tileWidth * width,
            this.tileHeight * height
        );
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

    _markDirty(x, y) {
        this._dirtyCells.add(`${x},${y}`);
    }

    isDirty(x, y) {
        this._dirtyCells.has(`${x},${y}`);
    }
}
