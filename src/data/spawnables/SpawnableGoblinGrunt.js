import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';
import { SPWN_SHORTSWORD } from '../Spawnables';
import { spawn } from '../Spawner';

export const createSpawnable = () => {
    const goblin = game.ecs.createPrefab('Goblin');

    goblin.brain.pushGoal(BoredGoalType.create());

    const sword = spawn(SPWN_SHORTSWORD);

    goblin.equipmentSlot.handRight.equip(sword);

    return goblin;
};
