import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';
import { MoveCommand } from '../ecs/components';

export default class PlayerManager extends Manager {
    #entityId = null;

    get entity() {
        return this.game.ecs.getEntity(this.#entityId);
    }

    get isTurn() {
        return this.entity.actor.hasEnergy;
    }

    onNewGame() {
        const player = this.game.ecs.createPrefab('Player', {
            position: {
                x: 16,
                y: 16,
            },
        });

        this.#entityId = player.id;

        for (let i = 0; i < 3; i++) {
            const wanderer = this.game.ecs.createPrefab('HumanWanderer', {
                moniker: {
                    name: `Wanderer ${i}`,
                },
                position: {
                    x: 21 + i,
                    y: 8,
                },
            });

            wanderer.brain.pushGoal(BoredGoalType.create());
        }
    }

    move(direction) {
        if (!this.isTurn) {
            return;
        }

        if (this.entity.has(MoveCommand)) {
            this.entity.remove(MoveCommand);
        }

        this.entity.add(MoveCommand, {
            direction,
        });
    }

    wait(turns = 1) {
        if (!this.isTurn) {
            return;
        }

        this.entity.fireEvent('energy-consumed', turns * 1000);
    }

    onSaveGame() {
        return {
            playerEntityId: this.#entityId,
        };
    }

    onLoadGame(data) {
        this.#entityId = data.playerEntityId;
    }
}
