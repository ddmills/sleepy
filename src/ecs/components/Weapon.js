import { Component } from 'geotic';
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
        const r = randomInt(1, this.die);

        console.log(`1d${this.die}+${this.modifier} = ${r}+${this.modifier} = ${r + this.modifier}`)
        return r + this.modifier;
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
