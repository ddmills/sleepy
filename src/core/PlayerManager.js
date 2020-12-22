import Manager from './Manager';
import * as Directions from '../enums/Directions';

export default class PlayerManager extends Manager {
    #entityId = null;
    actionQueue = [];

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

        // gather all entities for player
        const evt = this.entity.fireEvent('query-ownership', {
            result: new Set([this.entity]),
        });
        const serialized = this.game.ecs.serialize(Array.from(evt.data.result));

        console.log(serialized);

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

    getNextAction() {
        return this.actionQueue.shift();
    }

    move(direction) {
        this.actionQueue.push(() => {
            const delta = Directions.delta(direction);

            this.entity.fireEvent('try-move', delta);
        });
    }

    melee(target) {
        this.actionQueue.push(() => {
            if (target.isDestroyed || target.isDead) {
                console.warn(`Melee action on destroyed target ${target}`);

                return;
            }

            this.entity.fireEvent('try-melee', {
                target,
            });
        });
    }

    wait(turns = 1) {
        this.actionQueue.push(() => {
            this.entity.fireEvent('energy-consumed', turns * 1000);
        });
    }
}
