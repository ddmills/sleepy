import cp437 from './cp437';
import Sprite from './Sprite';

export default class SpriteSheet {
    #name = null;
    #image = null;
    #defaultGlyph = '?';
    #sprites = {};

    get name() {
        return this.#name;
    }

    get image() {
        return this.#image;
    }

    get width() {
        return this.image.width;
    }

    get height() {
        return this.image.height;
    }

    get spriteCountX() {
        return 16;
    }

    get spriteCountY() {
        return 16;
    }

    get spriteWidth() {
        return this.image.width / this.spriteCountX;
    }

    get spriteHeight() {
        return this.image.height / this.spriteCountY;
    }

    constructor(name, image) {
        this.#name = name;
        this.#image = image;

        cp437.forEach((row, i) => {
            row.forEach((glyph, j) => {
                this.#sprites[glyph] = new Sprite(glyph, this, j, i);
            });
        });
    }

    getSprite(glyph) {
        if (this.#sprites[glyph]) {
            return this.#sprites[glyph];
        }

        return this.#sprites[this.#defaultGlyph];
    }
}
