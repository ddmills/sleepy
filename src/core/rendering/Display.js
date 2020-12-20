import Grid from '../../utils/Grid';

export default class Display {
    ctx;
    canvas;
    width;
    height;
    zoom = 1;
    tileWidth;
    tileHeight;
    cells;
    clearColor = '#141a23';

    constructor({ width, height, tileWidth, tileHeight }) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.cells = new Grid(width * 2, height, () => null);
        this.cells.suppressOOBWarn = true;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        this.ctx.globalCompositeOperation = 'destination-over';

        this.ctx.font = `${this.tileHeight}px monospace`;
        this.ctx.textBaseline = 'top';

        this.setSize(width, height);
    }

    setSize(width, height, zoom) {
        this.width = width;
        this.height = height;
        this.zoom = zoom;

        const widthPx = this.tileWidth * this.width;
        const heightPx = this.tileHeight * this.height;

        this.canvas.style.cssText = `width: ${widthPx}px; height: ${heightPx}px; transform: scale(${this.zoom})`;
        this.canvas.width = widthPx;
        this.canvas.height = heightPx;

        this.cells.clearAndResize(width * 2, height);
    }

    draw(x, y, sprite, fg1, fg2, bg) {
        this.cells.set(x * 2, y, {
            img: sprite.colorize(fg1, fg2),
            width: sprite.width,
            height: sprite.height,
            bg,
            x,
            y,
        });
    }

    clear() {
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(
            0,
            0,
            this.tileWidth * this.width,
            this.tileHeight * this.height
        );
        this.cells.clear();
    }

    clearArea(x, y, width, height) {
        this.ctx.fillStyle = this.clearColor;
        this.ctx.fillRect(
            x * this.tileWidth,
            y * this.tileHeight,
            this.tileWidth * width,
            this.tileHeight * height
        );

        const offsetX = x * 2;

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const cellX = offsetX + i * 2;
                const cellY = y + j;

                this.cells.set(cellX, cellY, undefined);
                this.cells.set(cellX + 1, cellY, undefined);
            }
        }
    }

    render() {
        this.cells.data
            .filter((c) => c)
            .forEach((cell) => {
                const pixelX = cell.x * this.tileWidth;
                const pixelY = cell.y * this.tileHeight;

                if (cell.bg) {
                    this.ctx.fillStyle = cell.bg;
                    this.ctx.fillRect(pixelX, pixelY, cell.width, cell.height);
                }

                if (cell.img) {
                    this.ctx.drawImage(cell.img, pixelX, pixelY);
                }
            });
    }
}
