import { Component } from 'geotic';
import { getWeaponTypeDmgType, getWeaponTypeFamily, getWeaponTypeName } from '../../data/WeaponTypes';

export class Weapon extends Component {
    static properties = {
        weaponType: 'WPN_TYPE_DAGGER',
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
        evt.data.target.fireEvent('damage', {
            source: evt.data.interactor,
            sourceItem: this.name,
            damage: {
                type: this.damageType,
                value: 5,
            },
        });

        evt.data.interactor.fireEvent('energy-consumed', 800);

        evt.handle();
    }
}
