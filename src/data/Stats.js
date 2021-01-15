import { randomInt } from '../utils/rand';

export const STAT_STRENGTH = 'STAT_STRENGTH';
export const STAT_FINESSE = 'STAT_FINESSE';
export const STAT_ATHLETICISM = 'STAT_ATHLETICISM';
export const STAT_TRICKERY = 'STAT_TRICKERY';
export const STAT_FAITH = 'STAT_FAITH';

const lookup = {
    [STAT_STRENGTH]: {
        name: 'strength',
        abbreviation: 'STR',
    },
    [STAT_FINESSE]: {
        name: 'finesse',
        abbreviation: 'FIN',
    },
    [STAT_ATHLETICISM]: {
        name: 'athleticism',
        abbreviation: 'ATH',
    },
    [STAT_TRICKERY]: {
        name: 'trickery',
        abbreviation: 'TRK',
    },
    [STAT_FAITH]: {
        name: 'faith',
        abbreviation: 'FTH',
    },
};

export const getStatName = (stat) => lookup[stat].name;
export const getStatAbbreviation = (stat) => lookup[stat].abbreviation;
export const getStat = (stat, entity) => {
    const name = lookup[stat].name;

    return entity.stats[name]();
};
export const rollStat = (stat, entity) => {
    return randomInt(1, 20) + getStat(stat, entity);
};
export const statCheck = (stat, entity, target) => {
    return rollStat(stat, entity) >= target;
};
