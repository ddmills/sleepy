import ecs from './ecs';
import keycodes from './enums/keycodes';
import * as RenderSystem from './systems/RenderSystem';
import * as HungerSystem from './systems/HungerSystem';
import * as ActionSystem from './systems/ActionSystem';
import * as MovementSystem from './systems/MovementSystem';
import { BoredGoalType } from './ai/GoalTypes';
import { N, W, Z, E, S, NW, SW, SE, NE } from './enums/Directions';
import display from './core/display';
import { Brain, MoveCommand } from './ecs/components';

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

    display.drawText(1, 1, `%c{yellow}Knossonia`);

    display.drawText(1, display.height - 3, `energy (jim) %c{yellow}${jim.actor.energy}`);
    display.drawText(1, display.height - 2, `energy (bob) %c{yellow}${bob.actor.energy}`);
    display.drawText(display.width - 1 - `${ActionSystem.tick}`.length, 1, `%c{pink}${ActionSystem.tick}`);

    requestAnimationFrame(update);
};

requestAnimationFrame(update);
