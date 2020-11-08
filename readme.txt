- time
    - year
    - month
    - day
    - turn = 1000 tick
    - tick
        - each action has a cost
- space
    - world
    - region
    - tile
        - layer
            - background
            - content
            - fx
            - ui
    - glyph (16x24)
        - foreground (^)
        - background (*)
        - black/white


- game counts up from zero to tick bound, the main loop iterates over all actors that have `energy pool` component
    - actors energy increases by 1, capping at 1000
    - if an actor has enough energy to execute it's desired action
        - the action is performed
        - the action cost is deducted from the actors' energy
        - if the actor is the PC:
            - the game advances, in ticks, by the energy cost, one tick at a time
        - action cost could be +-10% to encourage extra randomization

main loop:
```
currentTick = 0;
tickBound = 1;

while (currentTick < tickBound) {
    currentTick++
    for (actor in actors) {
        actor.energy = Min(actor.energy + 1, 1000)

        action = getDesiredAction(actor) // if player, wait for input(?)

        if (action.cost <= actor.energy) {
            actor.energy -= action.cost
            action.perform()

            if (actor.isPlayerCharacter) {
                tickBound += action.cost
            }
        }
    }
}
```

main loop:
```
while (true) {
    for (actor in actors) {
        actor.energy++;

        if (actor.energy >= 0) {
            action = getDesiredAction(actor) // if player, wait for input(?)

            actor.energy -= action.cost
            action.perform()
        }
    }
}
```

```
tick = 0;
queue = PriorityQueue(actors)

while (true) {
    actor = queue.pop();

    action = getDesiredAction(actor) // if player, wait for input(?)

    action.perform()

    tick += action.cost

    for (actor in actors) { // still looping over actors
        actor.energy += action.cost
    }
}
```

entity
    - energy (value)
    - goals
        - goal (type, cost)
        - goal (type, cost)
        - goal (type, cost)

entity
    - brain
        - energy (value)
        - goals <EntityArray>
            - goal (type, cost)
            - goal (type, cost)
            - goal (type, cost)

GoalType
    - static isFinished : bool
    - static takeAction() : void
    - static originalGoal() : Entity / Goal


- kill player
    - approach player
        - move east
        - move east
        - move east

AI steps:

```
goals = stack()


onTurn() {
    while (goals.peek().isFinished) {
        goals.pop()
    }

    if (goals.isEmpty()) {
        // PLAN (?)
    }

    const goal = goals.peek();

    success = goal.takeAction();

    if (!success) {
        // remove all goals from stack which have originalIntent = goal.originalIntent
        // REPLAN goal.originalIntent
    }
}

```
