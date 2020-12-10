import { Component } from 'geotic';

export class IsEquipped extends Component {
    static properties = {
        slotKey: '',
    };

    get slot() {
        return this.entity.equipmentSlot[this.slotKey];
    }
}
