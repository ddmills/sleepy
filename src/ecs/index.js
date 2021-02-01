import { Engine } from 'geotic';

import * as components from './components';
import * as prefabs from './prefabs';
import Manager from '../core/Manager';

export default class ECS extends Manager {
    #engine;
    #id = 1;

    constructor(game) {
        super(game);
        this.#engine = new Engine();
        this.#engine.idGenerator = () => `e${this.#id++}`;

        Object.values(components).forEach((component) => {
            this.#engine.registerComponent(component);
        });

        Object.values(prefabs).forEach((prefab) => {
            this.#engine.registerPrefab(prefab);
        });

        this.world = this.#engine.createWorld();
    }

    teardown() {
        this.destroyEntities();
    }

    destroyEntities() {
        for (let entity of this.#engine.entities.all) {
            entity.destroy();
        }
    }

    cloneEntity(entity) {
        const data = entity.serialize();

        data.id = this.world.createId();

        this.world.deserialize(data);

        return this.world.getEntity(data.id);
    }
}
