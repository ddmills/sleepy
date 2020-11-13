export default class SpriteSheet {
    #name = null;
    #image = null;
    #spriteCountX = null;
    #spriteCountY = null;

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
        return this.#spriteCountX;
    }

    get spriteCountY() {
        return this.#spriteCountY;
    }

    get spriteWidth() {
        return this.image.width / this.spriteCountX;
    }

    get spriteHeight() {
        return this.image.height / this.spriteCountY;
    }

    constructor(name, image, spriteCountX, spriteCountY) {
        this.#name = name;
        this.#image = image;
        this.#spriteCountX = spriteCountX;
        this.#spriteCountY = spriteCountY;
    }
}
