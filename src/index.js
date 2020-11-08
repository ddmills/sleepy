import ecs from './ecs';
import { Brain } from './ecs/components/Brain';
import { Hunger } from './ecs/components/Hunger';

const createBeing = (properties) => {
    const entity = ecs.createPrefab('Being', properties);

    return entity;
};

const jim = createBeing({
    moniker: {
        name: 'Jim',
    },
});

jim.brain.pushGoal(ecs.createPrefab('Goal'));

const hungers = ecs.createQuery({
    all: [Hunger],
});

const brains = ecs.createQuery({
    all: [Brain],
});

const hungerSystem = (tick) => {
    hungers.get().forEach((entity) => {
        entity.hunger.value--;
    });
};

const brainSystem = (tick) => {
    brains.get().forEach((entity) => {
        entity.brain.energy++;
        console.log(`${entity.moniker.name} energy=${entity.brain.energy}`);
        if (entity.brain.energy >= 0) {
            entity.brain.energy = 0;
            entity.fireEvent('take-action');
        }
    });
};

let t = 0;
const tick = () => {
    console.log(`tick(${t})`);
    hungerSystem(t);
    brainSystem(t);
    t++;
};

// tick();
// tick();
// tick();
// tick();
// tick();
// tick();
// tick();
// tick();
// tick();

setInterval(() => {
    tick();
}, 1000);

// const data = ecs.serialize();
// console.log(JSON.stringify(data, null, 2));
