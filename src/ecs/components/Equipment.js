import { Component } from 'geotic';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { IsEquipped } from './IsEquipped';

export class Equipment extends Component {
    static properties = {
        slotTypes: [EQ_SLOT_BODY]
    };

    onTryEquip(evt) {
        console.log(evt.data);
        const slots = Object.values(evt.data.interactor.equipmentSlot).filter((slot) => {
            return this.slotTypes.includes(slot.slotType)
        });

        const names = slots.map((slot) => slot.name);

        console.log(`equip ${this.entity.moniker.display} to one of [${names.join(', ')}]`);
        this.entity.add(IsEquipped);
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
