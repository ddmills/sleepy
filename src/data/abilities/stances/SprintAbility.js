import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_SPRINT } from '../../Abilities';
import { SKILL_SPEED } from '../../Skills';
import { getStat, STAT_ATHLETICISM } from '../../Stats';
import SimpleToggledAbility from '../SimpleToggledAbility';

export default class SprintAbility extends SimpleToggledAbility {
    key = ABILITY_SPRINT;
    type = ABILITY_TYPE_STANCE;
    name = 'Sprint';
    description = 'Gain bonus move speed';
    isToggleable = true;

    computeSpeedMod(entity) {
        return 5 + 2 * getStat(STAT_ATHLETICISM, entity);
    }

    getToggleDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        const speed = this.computeSpeedMod(entity);

        return `Gain +${speed} move speed. [ATH]`;
    }

    getSkillMod(skill, status) {
        if (skill === SKILL_SPEED) {
            return this.computeSpeedMod(status.entity);
        }

        return 0;
    }
}
