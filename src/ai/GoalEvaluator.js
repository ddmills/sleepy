export const isFinished = (entity, goal) => {
    if (goal.name == 'bored') {
        return false;
    }

    if (goal.name == 'satisfy-hunger') {
        return !entity.hunger.isHungry;
    }

    if (goal.name == 'eat-food') {
        return goal.complete;
    }

    console.log(`GOAL TYPE ${goal.name} NOT FOUND`);

    return true;
};

export const takeAction = (entity, goal) => {
    const moniker = entity.has('Moniker') ? entity.moniker.name : 'Unknown';
    // console.log(`${moniker} taking action on ${goal.name}`);

    if (goal.name == 'bored') {
        // fire event ('i am bored') on entity

        const evt = entity.fireEvent('boredom');

        // if result, then push onto stack!
        if (evt.data.goal) {
            entity.brain.pushGoal(evt.data.goal);
        }

        // else, idle activity
        console.log(`${moniker} is idle`);

        return true;
    }

    if (goal.name == 'satisfy-hunger') {
        console.log(`${moniker} is hungry! hunger=${entity.hunger.value}`);

        // push 'eat-food' goals
        entity.brain.pushGoal(
            createSubGoal(goal, {
                name: 'eat-food',
                cost: 2,
            })
        );
        entity.brain.pushGoal(
            createSubGoal(goal, {
                name: 'eat-food',
                cost: 2,
            })
        );
        entity.brain.pushGoal(
            createSubGoal(goal, {
                name: 'eat-food',
                cost: 2,
            })
        );

        return true;
    }

    if (goal.name == 'eat-food') {
        entity.hunger.value += 6;
        goal.complete = true;

        console.log(
            `${moniker} eats some food! it's delicious! hunger=${entity.hunger.value}`
        );

        return true;
    }

    return true;
};

const createSubGoal = (originalIntent, properties) => {
    return originalIntent.ecs.createPrefab('Goal', {
        goal: {
            ...properties,
            originalIntent: originalIntent.entity.id,
        },
    });
};

export const plan = (entity, goal) => {
    // returns Goal
};
