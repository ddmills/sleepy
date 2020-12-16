import { Component } from 'geotic';
import { DMG_TYPE_BLUDGEONING } from '../../data/DamageTypes';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { pickRandom } from '../../utils/rand';
import { IsEquipped } from './IsEquipped';

export class EquipmentSlot extends Component {
    static allowMultiple = true;
    static keyProperty = 'key';
    static properties = {
        name: 'Body',
        key: 'body',
        slotType: EQ_SLOT_BODY,
        content: '<Entity>',
        isPrimary: false,
        isOffhand: false,
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

    onTryMelee(evt) {
        if (!this.isPrimary) {
            return;
        }

        const map = window.game.map;
        const targetPos = evt.data.target.position.getPos();
        const selfPos = this.entity.position.getPos();
        const isAdjacent = map.isAdjacent(
            selfPos.x,
            selfPos.y,
            targetPos.x,
            targetPos.y
        );

        if (!isAdjacent) {
            return;
        }

        if (this.isEmpty) {
            evt.data.target.fireEvent('damage', {
                source: this.entity,
                sourceItem: pickRandom(['punch', 'kick']),
                damage: {
                    type: DMG_TYPE_BLUDGEONING,
                    value: 4,
                },
            });

            this.entity.fireEvent('energy-consumed', 800);
            evt.handle();
            return;
        }

        this.content.fireEvent('try-use-melee', {
            interactor: this.entity,
            target: evt.data.target,
        });

        evt.handle();
    }

    onQueryAbilityModifierArmor(evt) {
        if (this.isEmpty) {
            return;
        }

        this.content.fireEvent(`query-equipped-ability-modifier-${evt.data.name}`, {
            name: evt.data.name,
            modifiers: evt.data.modifiers,
        });
    }
}
