import { Component } from 'geotic';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { getWeaponType, WPN_TYPE_UNARMED } from '../../data/WeaponTypes';
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
        equipment.loot.take(this.entity);

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
            const weaponType = getWeaponType(WPN_TYPE_UNARMED);

            weaponType.attack(this.entity, evt.data.target);

            this.entity.fireEvent('energy-consumed', 600);

            evt.handle();
            return;
        }

        this.content.fireEvent('try-use-melee', {
            interactor: this.entity,
            target: evt.data.target,
        });

        evt.handle();
    }

    onQuerySkillMod(evt) {
        if (this.isEmpty) {
            return;
        }

        this.content.fireEvent(`query-skill-mod-equipped`, {
            skill: evt.data.skill,
            modifiers: evt.data.modifiers,
        });
    }
}
