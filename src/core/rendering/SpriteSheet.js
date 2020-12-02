import cp437 from './cp437';
import Sprite from './Sprite';

export default class SpriteSheet {
    #name = null;
    #defaultGlyph = '?';
    #sprites = {};

    get name() {
        return this.#name;
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

    constructor(name, image) {
        this.#name = name;
        this.image = image;

        this.spriteWidth = this.image.width / this.spriteCountX;
        this.spriteHeight = this.image.height / this.spriteCountY;

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
