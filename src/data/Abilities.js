import PrayerOfProtectionAbility from './abilities/prayers/PrayerOfProtectionAbility';
import BlinkAbility from './abilities/spells/BlinkAbility';
import CrimsonWellAbility from './abilities/spells/CrimsonWellAbility';
import RageAbility from './abilities/stances/RageAbility';
import SprintAbility from './abilities/stances/SprintAbility';
import JumpAbility from './abilities/stunts/JumpAbility';

export const ABILITY_SPRINT = 'ABILITY_SPRINT';
export const ABILITY_RAGE = 'ABILITY_RAGE';
export const ABILITY_CRIMSON_WELL = 'ABILITY_CRIMSON_WELL';
export const ABILITY_BLINK = 'ABILITY_BLINK';
export const ABILITY_JUMP = 'ABILITY_JUMP';
export const ABILITY_PRAYER_PROTECTION = 'ABILITY_PRAYER_PROTECTION';

const lookup = {
    ABILITY_SPRINT: new SprintAbility(),
    ABILITY_RAGE: new RageAbility(),
    ABILITY_CRIMSON_WELL: new CrimsonWellAbility(),
    ABILITY_BLINK: new BlinkAbility(),
    ABILITY_JUMP: new JumpAbility(),
    ABILITY_PRAYER_PROTECTION: new PrayerOfProtectionAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityStatus = (key, entity) => {
    if (entity.abilityStatus) {
        return entity.abilityStatus[key];
    }
};
export const getStance = (entity) => {
    if (!entity.abilityStatus) {
        return;
    }

    return Object.values(entity.abilityStatus).find((status) => {
        return (
            status.ability.isStance &&
            !status.isCoolingDown &&
            !status.isComplete
        );
    });
};
export const getChanneling = (entity) => {
    if (!entity.abilityStatus) {
        return;
    }

    return Object.values(entity.abilityStatus).find((status) => {
        return status.ability.isChanneled && status.isChanneling;
    });
};
