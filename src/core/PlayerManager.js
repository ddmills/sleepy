import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';
import { MoveCommand } from '../ecs/components';

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

    move(direction) {
        if (this.entity.has(MoveCommand)) {
            this.entity.remove(MoveCommand);
        }

        this.entity.add(MoveCommand, {
            direction,
        });
    }

    wait(turns = 1) {
        this.entity.fireEvent('energy-consumed', turns * 1000);
    }
}
