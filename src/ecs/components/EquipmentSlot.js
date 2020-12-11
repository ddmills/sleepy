import { Component } from 'geotic';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { IsEquipped } from './IsEquipped';

export class EquipmentSlot extends Component {
    static allowMultiple = true;
    static keyProperty = 'key';
    static properties = {
        name: 'Body',
        key: 'body',
        slotType: EQ_SLOT_BODY,
        content: '<Entity>',
    };

    get isEmpty() {
        return !this.content;
    }

    onDestroyed() {
        if (!this.isEmpty) {
            this.content.destroy();
        }
    }

    unequip() {
        if (this.isEmpty) {
            return false;
        }

        const content = this.content;

        this.content = null;

        content.isEquipped.destroy();
        content.fireEvent('unequipped', {
            interactor: this.entity,
        });
    }

    equip(equipment) {
        equipment.add(IsEquipped, {
            slotKey: this.key,
            owner: this.entity,
        });

        this.content = equipment;

        equipment.fireEvent('equipped', {
            interactor: this.entity,
        });
    }
}
