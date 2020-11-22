import { Engine } from 'geotic';

import * as components from './components';
import * as prefabs from './prefabs';
import Manager from '../core/Manager';

export default class ECS extends Manager {
    #engine;

    get engine() {
        return this.#engine;
    }

    constructor(game) {
        super(game);
        this.#engine = new Engine();

        Object.values(components).forEach((component) => {
            this.#engine.registerComponent(component);
        });

        Object.values(prefabs).forEach((prefab) => {
            this.#engine.registerPrefab(prefab);
        });
    }

    cloneEntity(entity) {
        const data = entity.serialize();

        data.id = this.engine.generateId();

        this.engine.deserialize(data);

        return this.engine.getEntity(data.id);
    }

    onNewGame() {
        for (let entity of this.#engine.entities.all) {
            entity.destroy();
        }
    }

    onSaveGame() {
        return {
            engine: this.#engine.serialize(),
        };
    }

    onLoadGame(data) {
        for (let entity of this.#engine.entities.all) {
            entity.destroy();
        }

        this.#engine.deserialize(data.engine);
    }
}
