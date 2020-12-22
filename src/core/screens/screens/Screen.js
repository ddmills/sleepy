export default class Screen {
    #game;

    get game() {
        return this.#game;
    }

    constructor(game) {
        this.#game = game;
    }

    onEnter() {}

    onLeave() {}

    onUpdate(dt) {}
}
