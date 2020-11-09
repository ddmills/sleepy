import ecs from './ecs';
import keycodes from './enums/keycodes';
import * as RenderSystem from './systems/RenderSystem';
import * as HungerSystem from './systems/HungerSystem';
import * as ActionSystem from './systems/ActionSystem';
import * as MovementSystem from './systems/MovementSystem';
import { BoredGoalType } from './ai/GoalTypes';
import { N, W, Z, E, S, NW, SW, SE, NE } from './enums/Directions';
import display from './core/display';
import { Brain } from './ecs/components';

const jim = ecs.createPrefab('Player', {
    moniker: {
        name: 'Jim',
    },
    position: {
        x: 4,
        y: 10,
    },
});

const bob = ecs.createPrefab('Human', {
    moniker: {
        name: 'Bobby',
    },
    position: {
        x: 23,
        y: 20,
    },
});

bob.add(Brain);
bob.brain.pushGoal(BoredGoalType.create());

let t = 0;
const tick = () => {
    HungerSystem.update(t);
    ActionSystem.update(t);
    MovementSystem.update(t);
    RenderSystem.update(t);
    t++;

    display.drawText(1, 1, `%c{yellow}Knossonia`);
    display.drawText(display.width - 1 - `${t}`.length, 1, `%c{pink}${t}`);
};

tick();

const move = (direction) => {
    jim.fireEvent('move-command', {
        direction,
    });
    tick();
};

document.addEventListener('keydown', (e) => {
    if (keycodes[e.keyCode] === 'space') {
        tick();
    }
    if (keycodes[e.keyCode] === 'q') {
        move(NW);
    }
    if (keycodes[e.keyCode] === 'w') {
        move(N);
    }
    if (keycodes[e.keyCode] === 'e') {
        move(NE);
    }
    if (keycodes[e.keyCode] === 'a') {
        move(W);
    }
    if (keycodes[e.keyCode] === 's') {
        move(Z);
    }
    if (keycodes[e.keyCode] === 'd') {
        move(E);
    }
    if (keycodes[e.keyCode] === 'z') {
        move(SW);
    }
    if (keycodes[e.keyCode] === 'x') {
        move(S);
    }
    if (keycodes[e.keyCode] === 'c') {
        move(SE);
    }
});

// setInterval(() => {
//     tick();
// }, 1000);

// const data = ecs.serialize();
// console.log(JSON.stringify(data, null, 2));
