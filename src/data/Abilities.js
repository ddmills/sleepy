import SpeedAbility from './abilities/SpeedAbility';
import ThrowingAbility from './abilities/ThrowingAbility';

export const ABILITY_SPEED = 'ABILITY_SPEED';
export const ABILITY_THROWING = 'ABILITY_THROWING';

const lookup = {
    [ABILITY_SPEED]: new SpeedAbility(),
    [ABILITY_THROWING]: new ThrowingAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityName = (key) => lookup[key].name;
export const getAbilityValue = (key, entity) => lookup[key].compute(entity);
