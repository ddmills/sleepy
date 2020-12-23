import Manager from './Manager';

export default class ClockManager extends Manager {
    #tick = 0;
    #tickDelta = 0;
    #turnDelta = 0;

    get tick() {
        return this.#tick;
    }

    get tickDelta() {
        return this.#tickDelta;
    }

    get turnDelta() {
        return this.#turnDelta;
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
            tickDelta: 0,
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
        this.#tickDelta = data.tickDelta;
    }

    incrementTick(delta) {
        const prevTurn = this.turn;

        this.#tickDelta = delta;
        this.#tick += delta;

        const curTurn = this.turn;

        this.#turnDelta = curTurn - prevTurn;
    }

    update(dt) {
        this.#tickDelta = 0;
        this.#turnDelta = 0;
    }
}
