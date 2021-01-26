import Manager from './Manager';
import { SCREEN_ADVENTURE } from './screens/ScreenType';

const stringify = JSON.stringify;
const parse = JSON.parse;

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
        this.#isStarted = false;

        this.game.player.teardown();
        this.game.map.teardown();
        this.game.engine.teardown();
        this.game.world.teardown();
        this.game.temperature.teardown();
        this.game.console.teardown();
    }

    initiateSetup(data) {
        this.#isStarted = true;

        this.game.clock.setup(data.clock);
        this.game.player.setup(data.player);
        this.game.world.setup(data.world);
        this.game.map.setup(data.map);
    }

    newGame() {
        this.#filename = prompt('Enter save name', 'hello');

        if (!this.filename) {
            return;
        }

        this.deleteFile(this.filename);

        // spawn player
        const player = this.game.player.spawn();
        player.position.setPos(8, 8);

        this.game.screens.setScreen(SCREEN_ADVENTURE);

        // set screen to adventure


        // const playerData = this.game.player.getSetupData();
        // this.initiateTeardown();

        // const data = {
        //     filename: this.filename,
        //     clock: this.game.clock.getSetupData(),
        //     player: this.game.player.getSetupData(),
        //     world: this.game.world.getSetupData(),
        //     map: this.game.map.getSetupData(),
        // };

        // this.initiateSetup(data);
    }

    saveGame() {
        if (!this.isStarted) {
            console.warn("cannot save game since it's not started");
            return;
        }

        const data = {
            filename: this.filename,
            clock: this.game.clock.getSaveGameData(),
            map: this.game.map.getSaveGameData(),
            player: this.game.player.getSaveGameData(),
            world: this.game.world.getSaveGameData(),
            temperature: this.game.temperature.getSaveGameData(),
        };

        console.log('save data', data);

        localStorage.setItem(this.filename, stringify(data));

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

    saveChunkPositionData(chunkId, data) {
        localStorage.setItem(
            `${this.filename}-chunk-${chunkId}-positions`,
            stringify(data)
        );
    };

    loadChunkPositionData(chunkId) {
        const json = localStorage.getItem(
            `${this.filename}-chunk-${chunkId}-positions`
        );

        return json && parse(json);
    }

    saveChunkEntityData(chunkId, entityData) {
        localStorage.setItem(
            `${this.filename}-chunk-${chunkId}-entities`,
            stringify(entityData)
        );
    }

    loadChunkEntityData(chunkId) {
        const json = localStorage.getItem(
            `${this.filename}-chunk-${chunkId}-entities`
        );

        return json && parse(json);
    }

    saveAreaPositionData(areaId, positionData) {
        localStorage.setItem(
            `${this.filename}-${areaId}-positions`,
            stringify(positionData)
        );
    }

    saveAreaTemperatureData(areaId, temperatureData) {
        localStorage.setItem(
            `${this.filename}-${areaId}-temperatures`,
            stringify(temperatureData)
        );
    }

    saveAreaEntityData(areaId, entityData) {
        localStorage.setItem(
            `${this.filename}-${areaId}-entities`,
            stringify(entityData)
        );
    }

    loadAreaEntityData(areaId) {
        const json = localStorage.getItem(
            `${this.filename}-${areaId}-entities`
        );

        return json && parse(json);
    }

    loadAreaPositionData(areaId) {
        const json = localStorage.getItem(
            `${this.filename}-${areaId}-positions`
        );

        return json && parse(json);
    }

    loadAreaTemperatureData(areaId) {
        const json = localStorage.getItem(
            `${this.filename}-${areaId}-temperatures`
        );

        return json && parse(json);
    }

    loadSavefileData(filename) {
        const json = localStorage.getItem(filename);

        return json && parse(json);
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
