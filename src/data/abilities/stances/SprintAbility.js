import { AbilityStatus } from '../../../ecs/components/AbilityStatus';
import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_SPRINT } from '../../Abilities';
import { getStat, STAT_ATHLETICISM } from '../../Stats';
import Ability from '../Ability';

export default class SprintAbility extends Ability {
    key = ABILITY_SPRINT;
    type = ABILITY_TYPE_STANCE;
    name = 'Sprint';
    description = 'Gain bonus move speed';
    isToggleable = true;

    computeSpeedMod(entity) {
        return getStat(STAT_ATHLETICISM, entity);
    }

    initiate(entity) {
        console.log(`${entity.moniker.display} wants to sprint`);
    }

    getDescription(entity) {
        const speed = 1 + this.computeSpeedMod(entity);

        return `Gain +${speed} move speed. [ATH]`;
    }

    execute(entity, data) {
        entity.add(AbilityStatus, {
            key: this.key,
            isToggled: true,
        });
    }

    updateAbilityStatus(dt, entity, status) {
        console.log('sprinting');
    }
}
