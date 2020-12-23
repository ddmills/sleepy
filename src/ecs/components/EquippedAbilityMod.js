import { Component } from 'geotic';

export class EquippedAbilityMod extends Component {
    static allowMultiple = true;
    static properties = {
        ABILITY_ARMOR: 0,
        ABILITY_SPEED: 0,
        ABILITY_THROWING: 0,
        ABILITY_DODGE: 0,
    };

    onQueryAbilityModEquipped(evt) {
        const mod = this[evt.data.ability];

        if (mod) {
            evt.data.modifiers.push({
                source: this.entity.moniker.name,
                mod,
            });
        }
    }
}
