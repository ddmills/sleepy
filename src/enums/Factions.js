import Faction from '../data/Faction';

export const FACTION_PLAYER = 0;
export const FACTION_VILLAGER = 1;
export const FACTION_GOBLIN = 2;
export const FACTION_NATURE = 3;

export const factions = {
    player: new Faction({
        id: FACTION_PLAYER,
        name: 'player',
    }),
    villager: new Faction({
        id: FACTION_VILLAGER,
        name: 'villager',
    }),
    goblin: new Faction({
        id: FACTION_GOBLIN,
        name: 'goblin',
    }),
    nature: new Faction({
        id: FACTION_NATURE,
        name: 'nature',
    }),
};

export const getFactionByName = (name) => factions[name];
