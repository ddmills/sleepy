import { ABILITY_TYPE_PRAYER } from '../../../enums/AbilityTypes';
import { ABILITY_PRAYER_PROTECTION } from '../../Abilities';
import { getStat, STAT_FAITH } from '../../Stats';
import SimpleChannelAbility from '../SimpleChannelAbility';

export default class PrayerOfProtectionAbility extends SimpleChannelAbility {
    key = ABILITY_PRAYER_PROTECTION;
    type = ABILITY_TYPE_PRAYER;
    name = 'Prayer of Protection';

    getCooldownDuration(entity) {
        return 20000;
    }

    getChannelDuration(entity) {
        return 5000;
    }

    getArmorModifier(entity) {
        return Math.max(2, getStat(STAT_FAITH, entity));
    }

    getDescription(entity) {
        const armor = this.getArmorModifier(entity);

        return `Grant +${armor} bonus armor. [FTH]`;
    }

    getSkillMods(entity) {
        return {
            SKILL_ARMOR: this.getArmorModifier(entity),
        };
    }
}
