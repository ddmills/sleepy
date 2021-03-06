import { Component } from 'geotic';
import {
    getWeaponType,
    getWeaponTypeDmgType,
    getWeaponTypeFamily,
    getWeaponTypeName,
} from '../../data/WeaponTypes';
import { randomInt } from '../../utils/rand';

export class Weapon extends Component {
    static properties = {
        weaponType: 'WPN_TYPE_DAGGER',
        die: 6,
        modifier: 0,
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

    getShortDescription(user) {
        return getWeaponType(this.weaponType).getShortDescription(user, this);
    }

    roll() {
        const r = randomInt(1, this.die);

        return r + this.modifier;
    }

    onTryUseMelee(evt) {
        const weaponType = getWeaponType(this.weaponType);

        weaponType.attack(evt.data.interactor, evt.data.target, this);

        evt.data.interactor.fireEvent('energy-consumed', this.cost);

        evt.data.success = true;
    }

    onTryUseMeleeOffhand(evt) {
        const weaponType = getWeaponType(this.weaponType);

        weaponType.offhandAttack(evt.data.interactor, evt.data.target, this);

        evt.data.success = true;
    }
}
