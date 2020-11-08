import ecs from './ecs';
import Display from './core/display';
import * as RenderSystem from './systems/RenderSystem';
import * as HungerSystem from './systems/HungerSystem';
import * as BrainSystem from './systems/BrainSystem';
import { BoredGoalType } from './ai/GoalTypes';

const jim = ecs.createPrefab('Being', {
    moniker: {
        name: 'Jim',
    },
    position: {
        x: 4,
        y: 10
    }
});

jim.brain.pushGoal(BoredGoalType.create());

let t = 0;
const tick = () => {
    console.log(`tick(${t})`);
    HungerSystem.update(t);
    BrainSystem.update(t);
    RenderSystem.update(t);
    t++;
};

setInterval(() => {
    tick();
}, 1000);

// const data = ecs.serialize();
// console.log(JSON.stringify(data, null, 2));
