export default class System {
    #game = null;

    get game() {
        return this.#game;
    }

    constructor(game) {
        this.#game = game;
    }

    update(dt) {}
}
