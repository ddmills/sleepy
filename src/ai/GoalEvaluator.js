import * as GoalTypes from './GoalTypes';

const goalTypeMap = {};

Object.values(GoalTypes).forEach((goalType) => {
    goalTypeMap[goalType.name] = goalType;
});

const getGoalType = (name) => {
    const type = goalTypeMap[name];

    if (!type) {
        console.warn(`GoalType (${name}) not found!`);
    }

    return type;
};

export const isFinished = (entity, goal) => {
    const type = getGoalType(goal.name);

    return type.isFinished(entity, goal);
};

export const takeAction = (entity, goal) => {
    const type = getGoalType(goal.name);

    return type.takeAction(entity, goal);
};
