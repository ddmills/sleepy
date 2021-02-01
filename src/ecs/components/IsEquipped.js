import { Component } from 'geotic';

export class IsEquipped extends Component {
    static properties = {
        slotKey: '',
        ownerId: 0,
    };

    get owner() {
        return getEntityRef(this, 'ownerId');
    }

    set owner(value) {
        setEntityRef(this, 'ownerId', value);
    }

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
