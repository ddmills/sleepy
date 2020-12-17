import { Component } from 'geotic';
import { ABILITY_ACCURACY, ABILITY_PENETRATION, getAbilityValue } from '../../data/Abilities';
import { getStatModifier, rollStat, STAT_STRENGTH } from '../../data/Stats';
import { getWeaponTypeDmgType, getWeaponTypeFamily, getWeaponTypeName } from '../../data/WeaponTypes';
import { randomInt } from '../../utils/rand';

export class Weapon extends Component {
    static properties = {
        weaponType: 'WPN_TYPE_DAGGER',
        dmgRoll: '',
        penetration: 4
    };

    get name() {
        return getWeaponTypeName(this.weaponType);
    }

    get family() {
        return getWeaponTypeFamily(this.weaponType);
    }

    get damageType() {
        return getWeaponTypeDmgType(this.weaponType);
    }

    onTryUseMelee(evt) {
        evt.data.target.fireEvent('attacked', {
            attacker: evt.data.interactor,
            weaponName: this.name,
            damageType: this.damageType,
            damage: randomInt(1, 5) + 3,
            penetration: rollStat(STAT_STRENGTH, evt.data.interactor) + this.penetration,
            accuracy: getAbilityValue(ABILITY_ACCURACY, evt.data.interactor) + randomInt(1, 20)
        });

        evt.data.interactor.fireEvent('energy-consumed', 800);

        evt.handle();
    }
}
