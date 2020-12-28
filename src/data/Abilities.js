import SprintAbility from './abilities/stances/SprintAbility';

export const ABILITY_SPRINT = 'ABILITY_SPRINT';

const lookup = {
    ABILITY_SPRINT: new SprintAbility()
};

export const getAbility = (key) => lookup[key];
