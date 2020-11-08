import ecs from '../../ecs';

export class GoalType {
    static name = 'Unknown';
    static cost = 0;

    static isFinished(entity, goal) {
        return false;
    }

    static takeAction(entity, goal) {
        return false;
    }

    static createAsSubGoal(originalIntent, properties = {}) {
        return this.create({
            ...properties,
            originalIntent: originalIntent.entity.id
        });
    };

    static create(properties = {}) {
        return ecs.createPrefab('Goal', {
            goal: {
                name: this.name,
                cost: this.cost,
                ...properties
            },
        });
    }
}
