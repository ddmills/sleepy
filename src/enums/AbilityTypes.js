export const ABILITY_TYPE_STANCE = 0;
export const ABILITY_TYPE_SHOUT = 1;
export const ABILITY_TYPE_STUNT = 2;
export const ABILITY_TYPE_SPELL = 3;

const lookup = {
    [ABILITY_TYPE_STANCE]: {
        name: 'Stance'
    },
    [ABILITY_TYPE_SHOUT]: {
        name: 'Shout'
    },
    [ABILITY_TYPE_STUNT]: {
        name: 'Stunt'
    },
    [ABILITY_TYPE_SPELL]: {
        name: 'Spell'
    },
};

export const getAbilityTypeName = (key) => lookup[key].name;
