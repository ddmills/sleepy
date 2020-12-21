import { getDmgTypeName } from '../DamageTypes';
import { getStat, STAT_STRENGTH } from '../Stats';
import { getWeaponFamilyName } from '../WeaponFamilies';

export default class WeaponType {
    constructor(data) {
        this.name = data.name;
        this.family = data.family;
        this.key = data.key;
        this.damageType = data.damageType;
    }

    weaponDamageText(user, weapon) {
        let text = `1d${weapon.die}`;
        const str = getStat(STAT_STRENGTH, user);
        const mod = weapon.modifier + str;

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
}
