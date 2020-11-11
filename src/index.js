import ecs from './ecs';
import { BoredGoalType } from './ai/GoalTypes';
import { DIR_N, DIR_W, DIR_Z, DIR_E, DIR_S, DIR_NW, DIR_SW, DIR_SE, DIR_NE } from './enums/Directions';
import { MoveCommand } from './ecs/components';
import Game from './core/Game';
import * as KeyCodes from './core/input/KeyCodes';
import { INPUT_DOMAIN_GAME } from './core/input/InputDomainType';

const g = new Game();

const player = ecs.createPrefab('Player', {
    moniker: {
        name: 'Player',
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
    if (e.keyCode === KeyCodes.KEY_SPACE) {
        player.fireEvent('energy-consumed', 1000);
    }
    if (e.keyCode === KeyCodes.KEY_Q) {
        move(player, DIR_NW);
    }
    if (e.keyCode === KeyCodes.KEY_W) {
        move(player, DIR_N);
    }
    if (e.keyCode === KeyCodes.KEY_E) {
        move(player, DIR_NE);
    }
    if (e.keyCode === KeyCodes.KEY_A) {
        move(player, DIR_W);
    }
    if (e.keyCode === KeyCodes.KEY_S) {
        move(player, DIR_Z);
    }
    if (e.keyCode === KeyCodes.KEY_D) {
        move(player, DIR_E);
    }
    if (e.keyCode === KeyCodes.KEY_Z) {
        move(player, DIR_SW);
    }
    if (e.keyCode === KeyCodes.KEY_X) {
        move(player, DIR_S);
    }
    if (e.keyCode === KeyCodes.KEY_C) {
        move(player, DIR_SE);
    }
});

g.commandManager.pushDomain(INPUT_DOMAIN_GAME);

g.start();
