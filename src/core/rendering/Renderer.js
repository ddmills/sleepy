import { Display as RotDisplay } from 'rot-js';

export default class Renderer {
    #rot = null;
    #container = null;

    width = 64;
    height = 32;

    constructor() {
        RotDisplay.Rect.cache = true;
        this.#rot = new RotDisplay({
            width: this.width,
            height: this.height,
            fontSize: 18,
            forceSquareRatio: false,
            bg: '#1c171f',
        });
        this.attach();
    }

    attach() {
        this.#container = document.body.appendChild(this.#rot.getContainer());
    }

    draw(x, y, char, fg, bg) {
        this.#rot.draw(x, y, char, fg, bg);
    }

    drawText(x, y, string) {
        this.#rot.drawText(x, y, string);
    }

    clear() {
        this.#rot.clear();
    }

    getDOMContainer() {
        return this.#container;
    }

    eventToPosition(e) {
        return this.#rot.eventToPosition(e);
    }
}
