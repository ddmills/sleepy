import Manager from './Manager';
import { MeleeCommand, MoveCommand } from '../ecs/components';

export default class PlayerManager extends Manager {
    #entityId = null;

    get entity() {
        return this.game.ecs.getEntity(this.#entityId);
    }

    get isTurn() {
        return this.entity.actor.hasEnergy;
    }

    get position() {
        return this.entity.position.getPos();
    }

    onNewGame() {
        const position = this.game.map.getRandomEmptyPosition();
        const player = this.game.ecs.createPrefab('Player');

        player.position.setPos(position.x, position.y);

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

    melee(target) {
        if (!this.isTurn) {
            return;
        }

        if (this.entity.has(MeleeCommand)) {
            this.entity.remove(MeleeCommand);
        }

        this.entity.add(MeleeCommand, {
            target
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
