import { AbilityStatus } from '../../ecs/components/AbilityStatus';
import { getAbilityStatus } from '../Abilities';
import Ability from './Ability';

export default class SimpleDurationAbility extends Ability {
    getDuration(entity) {
        return 20000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    execute(entity, data) {
        const status = getAbilityStatus(this.key, entity);

        if (status) {
            return false;
        }

        entity.add(AbilityStatus, {
            key: this.key,
            isToggledOn: true,
            isCoolingDown: true,
            duration: this.getDuration(entity),
            cooldownDuration: this.getCooldownDuration(entity),
            statMods: this.getStatMods(entity),
            skillMods: this.getSkillMods(entity),
        });

        return true;
    }
}
