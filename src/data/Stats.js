export const STAT_STRENGTH = 0;
export const STAT_DEXTERITY = 1;
export const STAT_ATHLETICISM = 2;
export const STAT_TRICKERY = 3;

const lookup = {
    [STAT_STRENGTH]: {
        name: 'strength',
    },
    [STAT_DEXTERITY]: {
        name: 'dexterity',
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
}
