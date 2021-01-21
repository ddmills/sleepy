import Faction from '../data/Faction';

export const FACTION_PLAYER = 0;
export const FACTION_VILLAGER = 1;
export const FACTION_GOBLIN = 2;
export const FACTION_BEAR = 3;
export const FACTION_SERPENT = 4;

export const factions = {
    player: new Faction({
        id: FACTION_PLAYER,
        name: 'player',
        display: 'Player',
    }),
    villager: new Faction({
        id: FACTION_VILLAGER,
        name: 'villager',
        display: 'Villager',
    }),
    goblin: new Faction({
        id: FACTION_GOBLIN,
        name: 'goblin',
        display: 'Goblin',
    }),
    serpent: new Faction({
        id: FACTION_SERPENT,
        name: 'serpent',
        display: 'Serpent',
    }),
    bear: new Faction({
        id: FACTION_BEAR,
        name: 'bear',
        display: 'Bear',
    }),
};

export const getFactionByName = (name) => factions[name];
