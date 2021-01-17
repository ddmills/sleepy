import { Component } from 'geotic';

export class EquippedSkillMod extends Component {
    static allowMultiple = true;
    static properties = {
        SKILL_ARMOR: 0,
        SKILL_HEALTH: 0,
        SKILL_SPEED: 0,
        SKILL_THROWING: 0,
        SKILL_DODGE: 0,
        SKILL_BRAWLING: 0,
        SKILL_AXE: 0,
        SKILL_BLADE: 0,
        SKILL_CUDGEL: 0,
    };

    onQuerySkillModEquipped(evt) {
        const mod = this[evt.data.skill];

        if (mod) {
            evt.data.modifiers.push({
                source: this.entity.moniker.name,
                mod,
            });
        }
    }
}
