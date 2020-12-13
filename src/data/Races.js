import RaceData from './RaceData';

export const RACE_HUMAN = 'RACE_HUMAN';
export const RACE_GOBLIN = 'RACE_GOBLIN';

const lookup = {
    [RACE_HUMAN]: new RaceData({
        name: 'Human',
        key: RACE_HUMAN,
        speed: 1,
        modStrength: 1,
        modDexterity: 1,
        modAthleticism: 1,
        modTrickery: 1,
    }),
    [RACE_GOBLIN]: new RaceData({
        name: 'Goblin',
        key: RACE_GOBLIN,
        speed: 1,
        modStrength: -1,
        modDexterity: 2,
        modAthleticism: 1,
        modTrickery: 2,
    }),
};

export const getRaceData = (name) => lookup[name];
