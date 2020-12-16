export const DMG_TYPE_BLUDGEONING = 0;
export const DMG_TYPE_PIERCING = 1;
export const DMG_TYPE_SLASHING = 2;

const lookup = {
    [DMG_TYPE_BLUDGEONING]: {
        name: 'Bludgeoning',
        verb: 'bludgeons',
    },
    [DMG_TYPE_PIERCING]: {
        name: 'Piercing',
        verb: 'pierces',
    },
    [DMG_TYPE_SLASHING]: {
        name: 'Slashing',
        verb: 'slashes',
    },
};

export const getDmgTypeName = (type) => lookup[type].name;
export const getDmgTypeVerb = (type) => lookup[type].verb;
