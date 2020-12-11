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

        // TODO: choose slot
        const slot = slots[0];

        if (slot) {
            slot.equip(this.entity);
        }

        evt.handle();
    }

    onTryUnequip(evt) {
        const slotKey = this.entity.isEquipped.slotKey;
        const slot = evt.data.interactor.equipmentSlot[slotKey];

        console.log(`unequip ${this.entity.moniker.display} from ${slotKey}`, slot);

        if (slot) {
            slot.content = null;
        }

        this.entity.isEquipped.destroy();
        evt.handle();
    }

    onGetInteractions(evt) {
        if (this.entity.isInventoried) {
            if (!this.entity.isInventoried.isOwnedBy(evt.data.interactor)) {
                return;
            }
        }

        if (this.entity.has(IsEquipped)) {
            evt.data.interactions.push({
                name: `Unequip [${this.entity.isEquipped.slot.name}]`,
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
