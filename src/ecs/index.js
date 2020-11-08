import { Engine } from 'geotic';

import * as components from './components';
import * as prefabs from './prefabs';

const ecs = new Engine();

window.ecs = ecs;

Object.values(components).forEach((component) => {
    ecs.registerComponent(component);
});

Object.values(prefabs).forEach((prefab) => {
    ecs.registerPrefab(prefab);
});

export default ecs;
