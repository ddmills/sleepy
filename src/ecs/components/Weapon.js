import { Component } from 'geotic';
import { getWeaponTypeFamily, getWeaponTypeName } from '../../data/WeaponTypes';
import { game } from '../../core/Game';

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

    onTryUseMelee(evt) {
        console.log(`${evt.data.interactor.moniker.display} use ${this.name} as melee on ${evt.data.target.moniker.display}`);

        evt.data.target.fireEvent('damage', {
            source: this.entity,
            damage: {
                type: 'slashing',
                value: 5,
            },
        });

        evt.data.interactor.fireEvent('energy-consumed', 800);

        evt.handle();
    }
}
