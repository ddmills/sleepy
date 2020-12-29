export const DMG_TYPE_BLUDGEONING = 'DMG_TYPE_BLUDGEONING';
export const DMG_TYPE_PIERCING = 'DMG_TYPE_PIERCING';
export const DMG_TYPE_SLASHING = 'DMG_TYPE_SLASHING';
export const DMG_TYPE_NECROTIC = 'DMG_TYPE_NECROTIC';

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
    [DMG_TYPE_NECROTIC]: {
        name: 'Necrotic',
        verb: 'saps',
    },
};

export const getDmgTypeName = (type) => lookup[type].name;
export const getDmgTypeVerb = (type) => lookup[type].verb;
