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

    get x() {
        return this.entity.position.x;
    }

    get y() {
        return this.entity.position.y;
    }

    onNewGame() {
        const player = this.game.ecs.createPrefab('Player', {
            position: {
                x: 16,
                y: 16,
            },
        });

        this.#entityId = player.id;
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
