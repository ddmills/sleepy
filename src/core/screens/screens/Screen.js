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

    onInputCommand(cmd) {}

    onUpdate(dt) {}
}
