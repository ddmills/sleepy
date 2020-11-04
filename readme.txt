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

        action = getDesiredAction(actor)

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
