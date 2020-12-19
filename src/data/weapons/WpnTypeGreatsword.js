import Attack from '../Attack';
import { DMG_TYPE_SLASHING } from '../DamageTypes';
import { getStat, STAT_STRENGTH } from '../Stats';
import { WPN_FAMILY_BLADE } from '../WeaponFamilies';
import { WPN_TYPE_GREATSWORD } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeGreatsword extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_GREATSWORD,
            name: 'Greatsword',
            family: WPN_FAMILY_BLADE,
            damageType: DMG_TYPE_SLASHING,
        });
    }

    getAttacks(attacker, defender, weapon) {
        const str = getStat(STAT_STRENGTH, attacker);
        const die = weapon.roll();
        const damage = die + str;

        return [
            new Attack({
                attacker,
                defender,
                weaponName: weapon.name,
                damage,
                damageType: this.damageType,
            })
        ];
    }
}
