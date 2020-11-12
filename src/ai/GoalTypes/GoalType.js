import { FAILURE } from '../GoalActionResult';
import { game } from '../../core/Game';

export class GoalType {
    static name = 'Unknown';

    static isFinished(entity, goal) {
        return false;
    }

    static takeAction(entity, goal) {
        return FAILURE;
    }

    static createAsSubGoal(originalIntent, properties = {}) {
        return this.create({
            ...properties,
            originalIntent: originalIntent.entity.id,
        });
    }

    static create(properties = {}) {
        return game.ecs.createPrefab('Goal', {
            goal: {
                name: this.name,
                ...properties,
            },
        }).goal;
    }
}
