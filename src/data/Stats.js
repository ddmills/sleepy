import { randomInt } from '../utils/rand';

export const STAT_STRENGTH = 0;
export const STAT_FINESSE = 1;
export const STAT_ATHLETICISM = 2;
export const STAT_TRICKERY = 3;

const lookup = {
    [STAT_STRENGTH]: {
        name: 'strength',
    },
    [STAT_FINESSE]: {
        name: 'finesse',
    },
    [STAT_ATHLETICISM]: {
        name: 'athleticism',
    },
    [STAT_TRICKERY]: {
        name: 'trickery',
    },
};

export const getStatName = (stat) => lookup[stat].name;
export const getStatValue = (stat, entity) => {
    const name = lookup[stat].name;

    return entity.stats[name]();
};
export const getStatModifier = (stat, entity) => {
    const value = getStatValue(stat, entity);

    return Math.floor((value - 10) / 2);
};
export const rollStat = (stat, entity) => {
    return getStatModifier(stat, entity) + randomInt(1, 20);
}
