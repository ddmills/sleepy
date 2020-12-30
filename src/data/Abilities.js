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

const lookup = {
    ABILITY_SPRINT: new SprintAbility(),
    ABILITY_RAGE: new RageAbility(),
    ABILITY_CRIMSON_WELL: new CrimsonWellAbility(),
    ABILITY_BLINK: new BlinkAbility(),
    ABILITY_JUMP: new JumpAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityStatus = (key, entity) => {
    if (entity.abilityStatus) {
        return entity.abilityStatus[key];
    }
}
export const getStance = (entity) => {
    if (!entity.abilityStatus) {
        return;
    }

    return Object.values(entity.abilityStatus).find((status) => {
        return !status.isComplete && status.ability.isStance;
    });
}
