import Attack from '../Attack';
import { DMG_TYPE_SLASHING } from '../DamageTypes';
import { getSkillValue, SKILL_BLADE } from '../Skills';
import { WPN_FAMILY_BLADE } from '../WeaponFamilies';
import { WPN_TYPE_SHORTSWORD } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeShortsword extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_SHORTSWORD,
            name: 'Shortsword',
            family: WPN_FAMILY_BLADE,
            damageType: DMG_TYPE_SLASHING,
            skill: SKILL_BLADE,
        });
    }

    getAttacks(attacker, defender, weapon) {
        const str = getSkillValue(this.skill, attacker);
        const die = weapon.roll();
        const damage = die + str;

        return [
            new Attack({
                attacker,
                defender,
                weaponName: weapon.name,
                damage,
                damageType: this.damageType,
            }),
        ];
    }
}
