import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_RAGE } from '../../Abilities';
import { getStat, STAT_STRENGTH } from '../../Stats';
import SimpleToggledAbility from '../SimpleToggledAbility';

export default class RageAbility extends SimpleToggledAbility {
    key = ABILITY_RAGE;
    type = ABILITY_TYPE_STANCE;
    name = 'Rage';

    computeStrengthMod(entity) {
        return getStat(STAT_STRENGTH, entity) * 3;
    }

    getDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        const str = this.computeStrengthMod(entity);

        return `Enter a fit of rage. Gain +${str} STR and ${-2} dodge. [STR]`;
    }

    getSkillMods(entity) {
        return {
            SKILL_DODGE: -2,
        };
    }

    getStatMods(entity) {
        return {
            STAT_STRENGTH: this.computeStrengthMod(entity),
        };
    }
}
