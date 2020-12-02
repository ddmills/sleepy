import { parseColor } from '../../utils/ColorParser';

const isWhite = (r, g, b) => r === 255 && g === 255 && b === 255;
const isBlack = (r, g, b) => r === 0 && g === 0 && b === 0;

export default class Sprite {
    #ctx = null;
    #glyph = null;
    #sheet = null;
    #x = null;
    #y = null;
    _cache = {};

    get glyph() {
        return this.#glyph;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get sheet() {
        return this.#sheet;
    }

    get image() {
        return this.sheet.image;
    }

    get sourceX() {
        return this.sheet.spriteWidth * this.x;
    }

    get sourceY() {
        return this.sheet.spriteHeight * this.y;
    }

    get width() {
        return this.sheet.spriteWidth;
    }

    get height() {
        return this.sheet.spriteHeight;
    }

    constructor(glyph, sheet, x, y) {
        this.#glyph = glyph;
        this.#sheet = sheet;
        this.#x = x;
        this.#y = y;

        const canvas = document.createElement('canvas');

        canvas.width = this.width;
        canvas.height = this.height;

        this.#ctx = canvas.getContext('2d');

        this.#ctx.drawImage(
            this.sheet.image,
            this.sourceX,
            this.sourceY,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        );
    }

    colorize(primaryCss, secondaryCss) {
        const primary = parseColor(primaryCss);
        const secondary = parseColor(secondaryCss);

        const key = `${primary.key}-${secondary.key}`;

        if (this._cache.hasOwnProperty(key)) {
            return this._cache[key];
        }

        const pixels = this.#ctx.getImageData(0, 0, this.width, this.height);

        for (let i = 0; i < pixels.data.length; i += 4) {
            const r = pixels.data[i];
            const g = pixels.data[i + 1];
            const b = pixels.data[i + 2];

            if (isBlack(r, g, b)) {
                pixels.data[i] = primary[0];
                pixels.data[i + 1] = primary[1];
                pixels.data[i + 2] = primary[2];
                pixels.data[i + 4] = primary[3];
            } else {
                pixels.data[i] = secondary[0];
                pixels.data[i + 1] = secondary[1];
                pixels.data[i + 2] = secondary[2];
                pixels.data[i + 4] = secondary[3];
            }
        }

        const cvs = document.createElement('canvas');

        cvs.width = this.width;
        cvs.height = this.height;

        cvs.getContext('2d').putImageData(pixels, 0, 0);

        this._cache[key] = cvs;

        return cvs;
    }
}
