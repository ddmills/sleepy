import { Component } from 'geotic';
import { game } from '../../core/Game';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';
import { getWeaponType } from '../../data/WeaponTypes';
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
        defaultWpnType: null,
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

    doMeleeAttack(target) {
        if (this.isEmpty) {
            if (this.defaultWpnType) {
                const weaponType = getWeaponType(this.defaultWpnType);

                weaponType.attack(this.entity, target);

                this.entity.fireEvent('energy-consumed', 600);

                return true;
            }
        } else {
            const itemMelee = this.content.fireEvent('try-use-melee', {
                interactor: this.entity,
                target,
            });

            return itemMelee.data.success;
        }

        return false;
    }

    doOffhandAttack(target) {
        if (this.isEmpty) {
            if (this.defaultWpnType) {
                const weaponType = getWeaponType(this.defaultWpnType);

                weaponType.offhandAttack(this.entity, target);

                return true;
            }
        } else {
            const itemMelee = this.content.fireEvent('try-use-melee-offhand', {
                interactor: this.entity,
                target,
            });

            return itemMelee.data.success;
        }

        return false;
    }

    onTryMelee(evt) {
        const targetPos = evt.data.target.position.getPos();
        const selfPos = this.entity.position.getPos();
        const isAdjacent = game.map.isAdjacent(
            selfPos.x,
            selfPos.y,
            targetPos.x,
            targetPos.y
        );

        if (!isAdjacent) {
            return;
        }

        if (this.isPrimary) {
            if (this.doMeleeAttack(evt.data.target)) {
                evt.data.success = true;
            }
        } else {
            this.doOffhandAttack(evt.data.target);
        }
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
