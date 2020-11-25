import Manager from './Manager';

export default class GameStateManager extends Manager {
    #isStarted = false;
    #savefile = 'testing';

    get savefile() {
        return this.#savefile;
    }

    get isStarted() {
        return this.#isStarted;
    }

    gameOver() {
        this.#isStarted = false;
    }

    newGame() {
        console.log('NEW GAME');
        this.#savefile = prompt('Enter save name', 'test');

        this.deleteSaveFile(this.#savefile);

        this.game.clock.onNewGame();
        this.game.engine.onNewGame();
        this.game.map.onNewGame();
        this.game.player.onNewGame();
        this.#isStarted = true;
    }

    saveGame() {
        const data = {
            ...this.game.clock.onSaveGame(),
            ...this.game.player.onSaveGame(),
            ...this.game.engine.onSaveGame(),
            ...this.game.map.onSaveGame(),
        };

        localStorage.setItem(this.#savefile, JSON.stringify(data));
    }

    deleteSaveFile(savefile) {
        const files = Object.keys(localStorage);

        files.forEach((file) => {
            if (file.startsWith(`${savefile}-`)) {
                localStorage.removeItem(file);
            }
        });
    }

    saveSectorPositionData(sectorId, positionData) {
        localStorage.setItem(`${this.#savefile}-${sectorId}-positions`, JSON.stringify(positionData));
    }

    saveSectorEntityData(sectorId, entityData) {
        localStorage.setItem(`${this.#savefile}-${sectorId}-entities`, JSON.stringify(entityData));
    }

    loadSectorEntityData(sectorId) {
        const json = localStorage.getItem(`${this.#savefile}-${sectorId}-entities`);

        return json && JSON.parse(json);
    }

    loadSectorPositionData(sectorId) {
        const json = localStorage.getItem(`${this.#savefile}-${sectorId}-positions`);

        return json && JSON.parse(json);
    }

    loadGame() {
        const data = JSON.parse(localStorage.getItem('save'));

        this.game.clock.onLoadGame(data);
        this.game.engine.onLoadGame(data);
        this.game.map.onLoadGame(data);
        this.game.player.onLoadGame(data);
        this.game.screens.onLoadGame(data);
        this.#isStarted = true;
    }
}
