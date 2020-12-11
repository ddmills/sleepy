import { Component } from 'geotic';

export class IsEquipped extends Component {
    static properties = {
        slotKey: '',
        owner: '<Entity>',
    };

    get slot() {
        return this.owner.equipmentSlot[this.slotKey];
    }

    onDropped(evt) {
        this.slot.unequip();
    }

    onThrown(evt) {
        this.slot.unequip();
    }
}
