import Manager from '../Manager';
import Display from './Display';

export default class Renderer extends Manager {
    #tileWidth = 16;
    #tileHeight = 24;

    width = 64;
    height = 32;

    get tileWidth() {
        return this.#tileWidth;
    }

    get tileHeight() {
        return this.#tileHeight;
    }

    get canvas() {
        return this.display.canvas;
    }

    constructor(game) {
        super(game);
        const tileSet = document.getElementById('tileset');

        this.display = new Display({
            width: this.width,
            height: this.height,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
        });

        document.body.appendChild(this.display.canvas);
    }

    draw(x, y, char, fg, bg) {
        this.display.draw(x, y, char, fg, bg);
    }

    drawText(x, y, text) {
        this.display.drawText(x, y, text);
    }

    clear() {
        this.display.clear();
    }

    pxToTile(xPx, yPx) {
        const x = Math.trunc(xPx / this.tileWidth);
        const y = Math.trunc(yPx / this.tileHeight);

        return {x, y};
    }
}
