import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_LIST_SELECT } from '../../core/screens/ScreenType';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { IsEquipped } from './IsEquipped';

export class Equipment extends Component {
    static properties = {
        slotTypes: [EQ_SLOT_BODY],
    };

    onTryEquip(evt) {
        const slots = Object.values(evt.data.interactor.equipmentSlot).filter(
            (slot) => {
                return this.slotTypes.includes(slot.slotType);
            }
        );

        game.screens.pushScreen(SCREEN_LIST_SELECT, {
            header: this.entity.moniker.display,
            icon: this.entity.glyph,
            leadText: 'Select a slot',
            list: slots,
            onRenderRow: (slot, x, y, isSelected) => {
                let text = slot.name;

                if (!slot.isEmpty) {
                    text += ` [${slot.content.moniker.display}]`;
                }

                if (isSelected) {
                    game.renderer.drawText(x, y, `→ ${text}`, 'yellow');
                } else {
                    game.renderer.drawText(x, y, `- ${text}`);
                }
            },
            onSelect: (slot) => {
                slot.unequip();
                slot.equip(this.entity);
                evt.data.interactor.fireEvent('energy-consumed', 200);
                evt.handle();
                game.screens.popScreen();
            },
        });
    }

    onTryUnequip(evt) {
        const slotKey = this.entity.isEquipped.slotKey;
        const slot = evt.data.interactor.equipmentSlot[slotKey];

        if (slot) {
            slot.content = null;
        }

        evt.data.interactor.fireEvent('energy-consumed', 200);

        this.entity.isEquipped.destroy();
        evt.handle();
    }

    onGetInteractions(evt) {
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
