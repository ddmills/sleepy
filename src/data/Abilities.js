import CrimsonWellAbility from './abilities/spells/CrimsonWellAbility';
import RageAbility from './abilities/stances/RageAbility';
import SprintAbility from './abilities/stances/SprintAbility';

export const ABILITY_SPRINT = 'ABILITY_SPRINT';
export const ABILITY_RAGE = 'ABILITY_RAGE';
export const ABILITY_CRIMSON_WELL = 'ABILITY_CRIMSON_WELL';

const lookup = {
    ABILITY_SPRINT: new SprintAbility(),
    ABILITY_RAGE: new RageAbility(),
    ABILITY_CRIMSON_WELL: new CrimsonWellAbility(),
};

export const getAbility = (key) => lookup[key];
export const getAbilityStatus = (key, entity) => {
    if (entity.abilityStatus) {
        return entity.abilityStatus[key];
    }
}
