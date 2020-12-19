import { Component } from 'geotic';
import { random } from 'nanoid';
import { ABILITY_ACCURACY, ABILITY_PENETRATION, getAbilityValue } from '../../data/Abilities';
import Attack from '../../data/Attack';
import { getStatModifier, rollStat, STAT_STRENGTH } from '../../data/Stats';
import { getWeaponType, getWeaponTypeDmgType, getWeaponTypeFamily, getWeaponTypeName } from '../../data/WeaponTypes';
import { randomInt } from '../../utils/rand';

export class Weapon extends Component {
    static properties = {
        weaponType: 'WPN_TYPE_DAGGER',
        die: 6,
        modifier: 1,
        cost: 600,
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

    roll() {
        return randomInt(1, this.die) + this.modifier;
    }

    onTryUseMelee(evt) {
        const weaponType = getWeaponType(this.weaponType);

        weaponType.attack(
            evt.data.interactor,
            evt.data.target,
            this,
        );

        evt.data.interactor.fireEvent('energy-consumed', this.cost);

        evt.handle();
    }
}
