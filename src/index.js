import ecs from './ecs';
import keycodes from './enums/keycodes';
import * as RenderSystem from './systems/RenderSystem';
import * as HungerSystem from './systems/HungerSystem';
import * as ActionSystem from './systems/ActionSystem';
import * as MovementSystem from './systems/MovementSystem';
import * as UISystem from './systems/UISystem';
import { BoredGoalType, MoveGoalType } from './ai/GoalTypes';
import { N, W, Z, E, S, NW, SW, SE, NE, delta } from './enums/Directions';
import { MoveCommand } from './ecs/components';

const jim = ecs.createPrefab('Player', {
    moniker: {
        name: 'Jim',
    },
    position: {
        x: 4,
        y: 10,
    },
});

const bob = ecs.createPrefab('HumanWanderer', {
    position: {
        x: 23,
        y: 20,
    },
});

bob.brain.pushGoal(BoredGoalType.create());

const move = (entity, direction) => {
    if (entity.has(MoveCommand)) {
        entity.remove(MoveCommand);
    }

    entity.add(MoveCommand, {
        direction,
    });
};

document.addEventListener('keydown', (e) => {
    if (keycodes[e.keyCode] === 'space') {
        jim.fireEvent('energy-consumed', 1000);
    }
    if (keycodes[e.keyCode] === 'q') {
        move(jim, NW);
    }
    if (keycodes[e.keyCode] === 'w') {
        move(jim, N);
    }
    if (keycodes[e.keyCode] === 'e') {
        move(jim, NE);
    }
    if (keycodes[e.keyCode] === 'a') {
        move(jim, W);
    }
    if (keycodes[e.keyCode] === 's') {
        move(jim, Z);
    }
    if (keycodes[e.keyCode] === 'd') {
        move(jim, E);
    }
    if (keycodes[e.keyCode] === 'z') {
        move(jim, SW);
    }
    if (keycodes[e.keyCode] === 'x') {
        move(jim, S);
    }
    if (keycodes[e.keyCode] === 'c') {
        move(jim, SE);
    }
});

const update = (dt) => {
    HungerSystem.update(dt);
    ActionSystem.update(dt);
    MovementSystem.update(dt);
    RenderSystem.update(dt);
    UISystem.update(dt);

    requestAnimationFrame(update);
};

requestAnimationFrame(update);
