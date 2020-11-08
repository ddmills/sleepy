import { Engine } from 'geotic';
import { Moniker } from './components/Moniker';
import { Goal } from './components/Goal';
import { Brain } from './components/Brain';
import { Hunger } from './components/Hunger';
import BeingPrefab from './prefabs/BeingPrefab.json';
import GoalPrefab from './prefabs/GoalPrefab.json';

const ecs = new Engine();

window.ecs = ecs;

ecs.registerComponent(Moniker);
ecs.registerComponent(Goal);
ecs.registerComponent(Brain);
ecs.registerComponent(Hunger);

ecs.registerPrefab(GoalPrefab);
ecs.registerPrefab(BeingPrefab);

export default ecs;
