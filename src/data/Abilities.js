import ArmorAbility from './abilities/ArmorAbility';
import SpeedAbility from './abilities/SpeedAbility';
import ThrowingAbility from './abilities/ThrowingAbility';
import DodgeAbility from './abilities/DodgeAbility';
import PenetrationAbility from './abilities/PenetrationAbility';
import AccuracyAbility from './abilities/AccuracyAbility';

export const ABILITY_SPEED = 'ABILITY_SPEED';
export const ABILITY_THROWING = 'ABILITY_THROWING';
export const ABILITY_ARMOR = 'ABILITY_ARMOR';
export const ABILITY_DODGE = 'ABILITY_DODGE';
export const ABILITY_PENETRATION = 'ABILITY_PENETRATION';
export const ABILITY_ACCURACY = 'ABILITY_ACCURACY';

const lookup = {
    [ABILITY_ARMOR]: new ArmorAbility(),
    [ABILITY_SPEED]: new SpeedAbility(),
    [ABILITY_THROWING]: new ThrowingAbility(),
    [ABILITY_DODGE]: new DodgeAbility(),
    [ABILITY_PENETRATION]: new PenetrationAbility(),
    [ABILITY_ACCURACY]: new AccuracyAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityName = (key) => lookup[key].name;
export const getAbilityValue = (key, entity) => lookup[key].compute(entity);
