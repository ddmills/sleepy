import { Engine } from 'geotic';

import * as components from './components';
import * as prefabs from './prefabs';

export default class ECS {
    #engine;

    get engine() {
        return this.#engine;
    }

    constructor() {
        this.#engine = new Engine();

        Object.values(components).forEach((component) => {
            this.#engine.registerComponent(component);
        });

        Object.values(prefabs).forEach((prefab) => {
            this.#engine.registerPrefab(prefab);
        });
    }
}
