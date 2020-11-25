import Manager from './Manager';

export default class GameStateManager extends Manager {
    #isStarted = false;
    #filename = 'test';

    get filename() {
        return this.#filename;
    }

    get isStarted() {
        return this.#isStarted;
    }

    gameOver() {
        this.#isStarted = false;
    }

    initiateTeardown() {
        console.log('STATE - teardown');
        this.#isStarted = false;

        this.game.player.teardown();
        this.game.map.teardown();
        this.game.engine.teardown();
        this.game.world.teardown();
    }

    initiateSetup(data) {
        console.log('STATE - setup');
        this.#isStarted = true;

        this.game.clock.setup(data.clock);
        this.game.player.setup(data.player);
        this.game.world.setup(data.world);
        this.game.map.setup(data.map);
    }

    newGame() {
        this.#filename = prompt('Enter save name', 'test');
        this.deleteFile(this.filename);
        this.initiateTeardown();

        const data = {
            filename: this.filename,
            clock: this.game.clock.getSetupData(),
            player: this.game.player.getSetupData(),
            world: this.game.world.getSetupData(),
            map: this.game.map.getSetupData(),
        };

        this.initiateSetup(data);
    }

    saveGame() {
        if (!this.isStarted) {
            console.warn('cannot save game since it\'s not started');
            return;
        }

        const data = {
            filename: this.filename,
            clock: this.game.clock.onSaveGame(),
            map: this.game.map.onSaveGame(),
            player: this.game.player.onSaveGame(),
            world: this.game.world.onSaveGame(),
        };

        console.log('save data', data);

        localStorage.setItem(this.filename, JSON.stringify(data));

        return data;
    }

    deleteFile(filename) {
        const files = Object.keys(localStorage);

        files.forEach((file) => {
            if (file.startsWith(`${filename}-`)) {
                localStorage.removeItem(file);
            }
        });
    }

    saveSectorPositionData(sectorId, positionData) {
        localStorage.setItem(`${this.filename}-${sectorId}-positions`, JSON.stringify(positionData));
    }

    saveSectorEntityData(sectorId, entityData) {
        localStorage.setItem(`${this.filename}-${sectorId}-entities`, JSON.stringify(entityData));
    }

    loadSectorEntityData(sectorId) {
        const json = localStorage.getItem(`${this.filename}-${sectorId}-entities`);

        return json && JSON.parse(json);
    }

    loadSectorPositionData(sectorId) {
        const json = localStorage.getItem(`${this.filename}-${sectorId}-positions`);

        return json && JSON.parse(json);
    }

    loadSavefileData(filename) {
        const json = localStorage.getItem(filename);

        return json && JSON.parse(json);
    }

    loadGame() {
        const filename = prompt('Enter save filename to load', 'test');

        const data = this.loadSavefileData(filename);

        if (!data) {
            console.warn(`save file ${filename} not found`);
        }

        this.#filename = filename;

        console.log('Loading game', data);

        this.initiateTeardown();
        this.initiateSetup(data);
    }

    loadGameData(data) {
        this.initiateTeardown();
        this.initiateSetup(data);
    }
}
