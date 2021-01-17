import { pickRandom, randomInt } from '../../utils/rand';
import Attack from '../Attack';
import { DMG_TYPE_BLUDGEONING } from '../DamageTypes';
import { getSkillValue, SKILL_BRAWLING } from '../Skills';
import { WPN_FAMILY_UNARMED } from '../WeaponFamilies';
import { WPN_TYPE_UNARMED } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeUnarmed extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_UNARMED,
            name: 'Unarmed',
            family: WPN_FAMILY_UNARMED,
            damageType: DMG_TYPE_BLUDGEONING,
            skill: SKILL_BRAWLING,
        });
    }

    getAttacks(attacker, defender, weapon) {
        const brawling = getSkillValue(this.skill, attacker);
        const die = randomInt(1, 4);
        const damage = die + brawling;

        return [
            new Attack({
                attacker,
                defender,
                weaponName: pickRandom(['punch', 'kick']),
                damage,
                damageType: this.damageType,
            }),
        ];
    }
}
