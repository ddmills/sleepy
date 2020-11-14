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

    incrementTick(delta) {
        this.#tickDelta = delta;
        this.#tick += delta;
    }

    onNewGame() {
        this.#tick = 0;
        this.#tickDelta = 0;
    }

    onLoadGame(data) {
        this.#tick = data.clock.tick;
        this.#tickDelta = data.clock.tickDelta;
    }

    onSaveGame() {
        return {
            clock: {
                tick: this.tick,
                tickDelta: this.tickDelta,
            },
        };
    }
}
