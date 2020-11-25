export default class Manager {
    #game;

    get game() {
        return this.#game;
    }

    constructor(game) {
        this.#game = game;
    }

    onNewGame() {}
    onSaveGame() {}
    onLoadGame(data) {}
    onSectorLoaded() {}
}
