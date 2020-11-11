import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';

export default class PlayerManager extends Manager {
    #entity = null;

    get entity() {
        return this.#entity;
    }

    onStart() {
        this.#entity = this.game.ecs.createPrefab('Player', {
            moniker: {
                name: 'Player',
            },
            position: {
                x: 4,
                y: 10,
            },
        });

        const bob = this.game.ecs.createPrefab('HumanWanderer', {
            position: {
                x: 23,
                y: 20,
            },
        });

        bob.brain.pushGoal(BoredGoalType.create());
    }
}
