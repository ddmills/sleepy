import Manager from '../Manager';
import Display from './Display';
import spritesheets from './spritesheets';

export default class Renderer extends Manager {
    tileWidth = 16;
    tileHeight = 16;
    #spritesheets = {};
    #display = null;

    get display() {
        return this.#display;
    }

    get canvas() {
        return this.display.canvas;
    }

    constructor(game) {
        super(game);

        spritesheets().forEach((spritesheet) => {
            this.#spritesheets[spritesheet.name] = spritesheet;
        });

        this.#display = new Display({
            width: 20,
            height: 20,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
        });

        document.body.appendChild(this.display.canvas);
    }

    resizeDisplay(width, height, zoom) {
        this.display.setSize(width, height, zoom);
    }

    draw(x, y, char, fg1 = '#adb8bc', fg2 = '#333', bg) {
        const sprite = this.#spritesheets.tiles.getSprite(char);

        this.display.draw(x, y, sprite, fg1, fg2, bg);
    }

    computeTextWidth(text) {
        return text.length * 0.5;
    }

    drawText(x, y, text, fg1 = '#adb8bc', fg2 = '#333', bg) {
        for (let i = 0; i < text.length; i++) {
            const sprite = this.#spritesheets.font.getSprite(text.charAt(i));

            this.display.draw(x + 0.5 * i, y, sprite, fg1, fg2, bg);
        }
    }

    drawTextCenter(y, text, fg1 = '#adb8bc', fg2 = '#333', bg) {
        const len = this.computeTextWidth(text);

        this.drawText(
            Math.ceil((this.game.camera.width - len) / 2),
            y,
            text,
            fg1,
            fg2,
            bg
        );
    }

    clear() {
        this.display.clear();
    }

    clearArea(x, y, width, height) {
        this.display.clearArea(x, y, width, height);
    }

    pxToTile(xPx, yPx) {
        const x = Math.trunc(xPx / this.tileWidth);
        const y = Math.trunc(yPx / this.tileHeight);

        return { x, y };
    }

    render() {
        this.display.render();
    }
}
