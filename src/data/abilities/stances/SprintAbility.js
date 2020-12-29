import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_SPRINT } from '../../Abilities';
import { getStat, STAT_ATHLETICISM } from '../../Stats';
import SimpleToggledAbility from '../SimpleToggledAbility';

export default class SprintAbility extends SimpleToggledAbility {
    key = ABILITY_SPRINT;
    type = ABILITY_TYPE_STANCE;
    name = 'Sprint';

    computeSpeedMod(entity) {
        return 5 + 2 * getStat(STAT_ATHLETICISM, entity);
    }

    getDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        const speed = this.computeSpeedMod(entity);

        return `Gain +${speed} move speed. [ATH]`;
    }

    getSkillMods(entity) {
        return {
            SKILL_SPEED: this.computeSpeedMod(entity)
        };
    }
}
