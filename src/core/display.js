import { Display as RotDisplay } from 'rot-js';
import { DARK_RED } from '../enums/Colors';

class Display {
    rot = null;

    constructor() {
        RotDisplay.Rect.cache = true;
        this.rot = new RotDisplay({
            width: 60,
            height: 40,
            forceSquareRatio: true,
            bg: DARK_RED,
        });
        this.attach();
    }

    attach() {
        document.body.appendChild(this.rot.getContainer());
    }

    draw(x, y, char, fg, bg) {
        this.rot.draw(x, y, char, fg, bg);
    }
}


export default new Display();
