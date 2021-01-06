import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';
import { SPWN_MACE } from '../Spawnables';
import { spawn } from '../Spawner';

export const createSpawnable = () => {
    const goblin = game.ecs.createPrefab('GoblinBruiser');

    goblin.brain.pushGoal(BoredGoalType.create());

    const mace = spawn(SPWN_MACE);

    goblin.equipmentSlot.handRight.equip(mace);

    return goblin;
};
