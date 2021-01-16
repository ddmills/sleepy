import { getAbilityStatus } from '../Abilities';
import Ability from './Ability';

export default class SimpleToggledAbility extends Ability {
    isToggleable = true;

    getDuration(entity) {
        return 10000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    execute(entity, data) {
        // const status = getAbilityStatus(this.key, entity);
        // if (status) {
        //     this.toggleOff(entity, status);
        // } else {
        //     this.toggleOn(entity);
        // }
    }
}
