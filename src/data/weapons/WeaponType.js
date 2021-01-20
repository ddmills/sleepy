import { randomWeightedBool } from '../../utils/rand';
import { getSkillValue } from '../Skills';
import { getWeaponFamilyName } from '../WeaponFamilies';

export default class WeaponType {
    constructor(data) {
        this.name = data.name;
        this.family = data.family;
        this.key = data.key;
        this.damageType = data.damageType;
        this.skill = data.skill;
    }

    weaponDamageText(user, weapon) {
        let text = `1d${weapon.die}`;
        const skill = getSkillValue(this.skill, user);
        const mod = weapon.modifier + skill;

        if (mod) {
            if (mod > 0) {
                text += ` + ${mod}`;
            } else {
                text += ` - ${Math.abs(mod)}`;
            }
        }

        return text;
    }

    getShortDescription(user, weapon) {
        const fam = getWeaponFamilyName(this.family);

        return `${fam}, ${this.weaponDamageText(user, weapon)}`;
    }

    getAttacks(attacker, defender, weapon) {
        return [];
    }

    attack(attacker, defender, weapon) {
        const attacks = this.getAttacks(attacker, defender, weapon);

        return attacks.map((attack) => {
            attack.defender.fireEvent('attacked', { attack });
        });
    }

    offhandAttack(attacker, defender, weapon) {
        if (randomWeightedBool(.2)) {
            this.attack(attacker, defender, weapon);
        }
    }
}
