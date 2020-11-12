import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';
import { MoveCommand } from '../ecs/components';

export default class PlayerManager extends Manager {
    #entityId = null;

    get entity() {
        return this.game.ecs.getEntity(this.#entityId);
    }

    onNewGame() {
        const player = this.game.ecs.createPrefab('Player', {
            position: {
                x: 4,
                y: 10,
            },
        });

        this.#entityId = player.id;

        for (let i = 0; i < 20; i++) {
            const wanderer = this.game.ecs.createPrefab('HumanWanderer', {
                moniker: {
                    name: `Wanderer ${i}`,
                },
                position: {
                    x: i%64,
                    y: i%32,
                },
            });

            wanderer.brain.pushGoal(BoredGoalType.create());
        }
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

    onSaveGame() {
        return {
            playerEntityId: this.#entityId
        };
    }

    onLoadGame(data) {
        this.#entityId = data.playerEntityId
    }
}
