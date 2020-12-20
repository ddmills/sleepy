import { pickRandom, randomInt } from '../../utils/rand';
import Attack from '../Attack';
import { DMG_TYPE_BLUDGEONING } from '../DamageTypes';
import { getStat, STAT_STRENGTH } from '../Stats';
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
        });
    }

    getAttacks(attacker, defender, weapon) {
        const str = getStat(STAT_STRENGTH, attacker);
        const die = randomInt(1, 4);
        const damage = die + str;

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
