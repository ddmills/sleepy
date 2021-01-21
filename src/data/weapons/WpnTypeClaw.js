import { pickRandom, randomInt } from '../../utils/rand';
import Attack from '../Attack';
import { DMG_TYPE_SLASHING } from '../DamageTypes';
import { getSkillValue, SKILL_BRAWLING } from '../Skills';
import { WPN_FAMILY_UNARMED } from '../WeaponFamilies';
import { WPN_TYPE_CLAW } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeClaw extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_CLAW,
            name: 'Claws',
            family: WPN_FAMILY_UNARMED,
            damageType: DMG_TYPE_SLASHING,
            skill: SKILL_BRAWLING,
        });
    }

    getAttacks(attacker, defender, weapon) {
        const skill = getSkillValue(this.skill, attacker);
        const die = randomInt(1, 8);
        const damage = die + skill;

        return [
            new Attack({
                attacker,
                defender,
                weaponName: pickRandom(['claw']),
                damage,
                damageType: this.damageType,
            }),
        ];
    }
}
