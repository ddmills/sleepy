import Manager from './Manager';
import { MeleeCommand, MoveCommand } from '../ecs/components';

export default class PlayerManager extends Manager {
    #entityId = null;

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

    getSetupData() {
        // TODO
        // player.fireEvent('query-owned-entities', { ids });
        // player.fireEvent('dereference-unowned-entities');
        // serialize all "owned"
        const entity = this.game.ecs.createPrefab('Player');
        const entityId = entity.id;
        const serialized = entity.serialize();

        entity.destroy();

        return {
            entityId,
            entity: serialized, // TODO inventory
        };
    }

    setup(data) {
        this.#entityId = data.entityId;
        this.game.ecs.deserialize(data.entity);
    }

    getSaveGameData() {
        const entityId = this.entity.id;
        const serialized = this.entity.serialize();

        return {
            entityId,
            entity: serialized, // TODO inventory
        };
    }

    teardown() {
        if (this.entity) {
            this.entity.destroy();
        }
        this.#entityId = null; // TODO does this need to destroy()?
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
}
