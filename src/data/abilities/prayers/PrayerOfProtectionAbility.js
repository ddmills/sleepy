import { ABILITY_TYPE_PRAYER } from '../../../enums/AbilityTypes';
import { allDirections, directionDelta } from '../../../enums/Directions';
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

    onChannelComplete(status) {
        const pos = status.entity.position.getPos();

        allDirections().forEach((dir) => {
            game.particles.createEmitter(pos.x, pos.y, {
                rate: 3,
            }, {
                glyphs: ['·', 'o', 'O'],
                fg1s: ['yellow'],
                speed: .05,
                direction: directionDelta(dir),
                lifetime: 3000,
            });
        });
    }
}
