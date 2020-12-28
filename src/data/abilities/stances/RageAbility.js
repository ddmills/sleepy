import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_RAGE } from '../../Abilities';
import { STAT_STRENGTH } from '../../Stats';
import SimpleToggledAbility from '../SimpleToggledAbility';

export default class RageAbility extends SimpleToggledAbility {
    key = ABILITY_RAGE;
    type = ABILITY_TYPE_STANCE;
    name = 'Rage';
    description = 'Gain bonus STR';
    isToggleable = true;

    computeStrengthMod(entity) {
        return 6;
    }

    getToggleDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        const str = this.computeStrengthMod(entity);

        return `Gain +${str} strength.`;
    }

    getStatMods(entity) {
        return {
            STAT_STRENGTH: this.computeStrengthMod(entity)
        };
    }
}
