import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';
import { SPWN_WOOD_CLUB } from '../Spawnables';
import { spawn } from '../Spawner';

export const createSpawnable = () => {
    const bruiser = game.ecs.createPrefab('GoblinBruiser');

    bruiser.brain.pushGoal(BoredGoalType.create());

    const club = spawn(SPWN_WOOD_CLUB);

    bruiser.equipmentSlot.handRight.equip(club);

    return bruiser;
};
