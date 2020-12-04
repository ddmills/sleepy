import Faction from '../data/Faction';

export const FACTION_PLAYER = 0;
export const FACTION_VILLAGERS = 1;
export const FACTION_GOBLINS = 2;

export const factions = {
    player: new Faction({
        id: FACTION_PLAYER,
        name: 'player',
    }),
    villagers: new Faction({
        id: FACTION_VILLAGERS,
        name: 'villagers',
    }),
    goblins: new Faction({
        id: FACTION_GOBLINS,
        name: 'goblins',
    }),
};

export const getFactionByName = (name) => factions[name];
