import ecs from './ecs';
import * as HungerSystem from './systems/HungerSystem';
import * as BrainSystem from './systems/BrainSystem';

const jim = ecs.createPrefab('Being', {
    moniker: {
        name: 'Jim',
    },
});

jim.brain.pushGoal(ecs.createPrefab('Goal'));

let t = 0;
const tick = () => {
    console.log(`tick(${t})`);
    HungerSystem.update(t);
    BrainSystem.update(t);
    t++;
};

setInterval(() => {
    tick();
}, 1000);

// const data = ecs.serialize();
// console.log(JSON.stringify(data, null, 2));
