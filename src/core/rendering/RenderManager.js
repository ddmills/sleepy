import Manager from '../Manager';
import Display from './Display';
import sprites from './sprites';

export default class Renderer extends Manager {
    #tileWidth = 16;
    #tileHeight = 24;
    #sprites = {};
    #display = null;

    width = 64;
    height = 32;

    get tileWidth() {
        return this.#tileWidth;
    }

    get tileHeight() {
        return this.#tileHeight;
    }

    get display() {
        return this.#display;
    }

    get canvas() {
        return this.display.canvas;
    }

    constructor(game) {
        super(game);

        sprites.forEach((sprite) => {
            this.#sprites[sprite.glyph] = sprite;
        });

        this.#display = new Display({
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
        for (let i = 0; i < text.length; i++) {
            this.drawSprite(x + i, y, text.charAt(i));
        }
        // this.display.drawText(x, y, text);
    }

    drawSprite(x, y, glyph, fg1 = 'red', fg2 = 'blue', bg) {
        const sprite = this.getSprite(glyph);

        if (!sprite) {
            console.warn('sprite for glyph not found!', glyph);
            return;
        }

        this.display.drawSprite(x, y, sprite, fg1, fg2, bg);
    }

    getSprite(glyph) {
        const sprite = this.#sprites[glyph];

        if (sprite) {
            return sprite;
        }

        return this.#sprites['?'];
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
