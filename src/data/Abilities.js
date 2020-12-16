import ArmorAbility from './abilities/ArmorAbility';
import SpeedAbility from './abilities/SpeedAbility';
import ThrowingAbility from './abilities/ThrowingAbility';

export const ABILITY_SPEED = 'ABILITY_SPEED';
export const ABILITY_THROWING = 'ABILITY_THROWING';
export const ABILITY_ARMOR = 'ABILITY_ARMOR';
export const ABILITY_DODGE = 'ABILITY_DODGE';

const lookup = {
    [ABILITY_ARMOR]: new ArmorAbility(),
    [ABILITY_SPEED]: new SpeedAbility(),
    [ABILITY_THROWING]: new ThrowingAbility(),
    [ABILITY_DODGE]: new ThrowingAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityName = (key) => lookup[key].name;
export const getAbilityValue = (key, entity) => lookup[key].compute(entity);
