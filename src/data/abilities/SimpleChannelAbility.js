import { AbilityStatus } from '../../ecs/components';
import Ability from './Ability';

export default class SimpleChannelAbility extends Ability {
    isToggleable = false;
    isChanneled = true;

    getDuration(entity) {
        return 5000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getChannelDuration(entity) {
        return 10000;
    }

    execute(entity, data) {
        entity.add(AbilityStatus, {
            key: this.key,
            isCoolingDown: false,
            channelDuration: this.getChannelDuration(entity),
            currentChannelDuration: 0,
            cooldownDuration: this.getCooldownDuration(entity),
            statMods: this.getStatMods(entity),
            skillMods: this.getSkillMods(entity),
        });
    }
}
