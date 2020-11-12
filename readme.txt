https://ddmills.com/knossonia/

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


# inspo
- https://github.com/Bozar/cursedSouls
- https://github.com/munificent/hauberk



- save/load
- rendering
    - one canvas per layer (?)
    - layers
        - BACKGROUND - highlighting squares/tiles
        - GROUND - walls, flooring
        - ITEMS - loot
        - ACTORS - monsters, player
        - EFFECTS - explosions, magic
        - UI - text, tags
