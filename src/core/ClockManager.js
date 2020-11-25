import Manager from './Manager';

export default class ClockManager extends Manager {
    #tick = 0;
    #tickDelta = 0;

    get tick() {
        return this.#tick;
    }

    get tickDelta() {
        return this.#tickDelta;
    }

    get turn() {
        return Math.floor(this.#tick / 1000);
    }

    get subTurn() {
        return this.#tick - this.turn * 1000;
    }

    getSetupData() {
        return {
            tick: 0,
            tickDelta: 0
        };
    }

    getSaveGameData() {
        return {
            tick: this.tick,
            tickDelta: this.tickDelta,
        };
    }

    setup(data) {
        this.#tick = data.tick;
        this.#tickDelta = data.tickDelta
    }

    incrementTick(delta) {
        this.#tickDelta = delta;
        this.#tick += delta;
    }
}
