import Manager from './Manager';
import { MeleeCommand, MoveCommand } from '../ecs/components';

export default class PlayerManager extends Manager {
    #entityId = null;
    #playerData = null;

    get entity() {
        return this.game.ecs.getEntity(this.#entityId);
    }

    get id() {
        return this.#entityId;
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

        this.#playerData = this.serializePlayer();
    }

    serializePlayer() {
        return {
            entityId: this.id,
            entity: this.entity.serialize(),
            position: this.position,
        };
    }

    deserializePlayer(data) {
        if (this.entity) {
            this.entity.destroy();
        }
        this.game.ecs.deserialize(data.entity);

        const entity = this.game.ecs.getEntity(data.entityId);

        this.#entityId = entity.id;

        entity.position.setPos(data.position.x, data.position.y);

    }

    onSectorUnload() {
        this.#playerData = this.serializePlayer();
        this.entity.destroy();
    }

    onSectorLoaded(sector, entry) {
        this.deserializePlayer(this.#playerData);

        if (entry) {
            this.entity.position.setPos(entry.x, entry.y);
        } else {
            const position = this.game.map.getRandomEmptyPosition();

            this.entity.position.setPos(position.x, position.y);
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

    melee(target) {
        if (!this.isTurn) {
            return;
        }

        if (this.entity.has(MeleeCommand)) {
            this.entity.remove(MeleeCommand);
        }

        this.entity.add(MeleeCommand, {
            target,
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
