import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_RAGE } from '../../Abilities';
import { getStat, STAT_STRENGTH } from '../../Stats';
import SimpleToggledAbility from '../SimpleToggledAbility';

export default class RageAbility extends SimpleToggledAbility {
    key = ABILITY_RAGE;
    type = ABILITY_TYPE_STANCE;
    name = 'Rage';
    description = 'Gain bonus STR';
    isToggleable = true;

    computeStrengthMod(entity) {
        return getStat(STAT_STRENGTH, entity) * 3;
    }

    getToggleDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        const str = this.computeStrengthMod(entity);

        return `Enter a fit of rage. Gain +${str} STR and decrease dodge by ${-2}. [STR]`;
    }

    getSkillMods(entity) {
        return {
            SKILL_DODGE: -2
        };
    }

    getStatMods(entity) {
        return {
            STAT_STRENGTH: this.computeStrengthMod(entity)
        };
    }
}
