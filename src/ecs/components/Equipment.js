import { Component } from 'geotic';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { IsEquipped } from './IsEquipped';

export class Equipment extends Component {
    static properties = {
        slotTypes: [EQ_SLOT_BODY]
    };

    onTryEquip(evt) {
        const slots = Object.values(evt.data.interactor.equipmentSlot).filter((slot) => {
            return this.slotTypes.includes(slot.slotType) && slot.isEmpty;
        });

        const slot = slots[0];

        console.log(`equip ${this.entity.moniker.display} to ${slot.name}`);
        this.entity.add(IsEquipped, {
            slotKey: slot.key
        });

        slot.contents = this.entity;

        evt.handle();
    }

    onTryUnequip(evt) {
        console.log(`unequip ${this.entity.moniker.display} from ${this.slotTypes}`);
        this.entity.isEquipped.destroy();
        evt.handle();
    }

    onGetInteractions(evt) {
        if (this.entity.has(IsEquipped)) {
            evt.data.interactions.push({
                name: 'Unequip',
                evt: 'try-unequip',
            });
        } else {
            evt.data.interactions.push({
                name: 'Equip',
                evt: 'try-equip',
            });
        }
    }
}
