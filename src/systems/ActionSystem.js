import ecs from '../ecs';
import { Actor } from '../ecs/components';
import System from './System';

export default class ActionSystem extends System {
    #tick = 0;
    #tickDelta = 0;
    #query = null;

    constructor(game) {
        super(game);

        this.#query = game.ecs.createQuery({
            all: [Actor],
        });
    }

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

    update(dt) {
        const entities = this.#query.get();
        const sorted = Array.from(entities);
        sorted.sort((a, b) => (a.actor.energy < b.actor.energy ? 1 : -1));

        const entity = sorted[0];
        this.#tickDelta = 0;

        if (!entity.actor.hasEnergy) {
            this.#tickDelta = entity.actor.energy * -1;
            this.#tick -= entity.actor.energy;

            entities.forEach((entity) => {
                entity.actor.addEnergy(this.#tickDelta);
            });
        }

        if (entity.actor.hasEnergy && !entity.isPlayer) {
            entity.fireEvent('take-action');
        }
    }
}
