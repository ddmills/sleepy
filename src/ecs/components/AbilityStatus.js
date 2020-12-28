import { Component } from 'geotic';
import { getAbility } from '../../data/Abilities';

export class AbilityStatus extends Component {
    static allowMultiple = true;
    static keyProperty = 'key';
    static properties = {
        key: 'ABILITY_SPRINT',
        isCoolingDown: false,
        isToggledOn: true,
        cooldownDuration: 50000,
        currentCooldownDuration: 0,
        toggleDuration: 10000,
        currentToggleDuration: 0,
        statMods: {},
        skillMods: {},
    };

    get ability() {
        return getAbility(this.key);
    }

    get remainingCooldownDuration() {
        if (!this.isCoolingDown) {
            return Infinity;
        }

        return this.cooldownDuration - this.currentCooldownDuration;
    }

    get remainingToggleDuration() {
        if (!this.isToggledOn || this.isCoolingDown) {
            return 0;
        }

        return this.toggleDuration - this.currentToggleDuration;
    }

    get isToggleDurationComplete() {
        return this.currentToggleDuration >= this.toggleDuration;
    }

    get isCooldownComplete() {
        return this.isCoolingDown && this.currentCooldownDuration >= this.cooldownDuration;
    }

    startCooldown() {
        this.isCoolingDown = true;
        this.isToggledOn = false;
    }

    onQuerySkillMod(evt) {
        if (this.isCoolingDown) {
            return;
        }

        const mod = this.skillMods[evt.data.skill];

        if (mod) {
            evt.data.modifiers.push({
                source: this.ability.name,
                mod,
            });
        }
    }

    onQueryStatMod(evt) {
        if (this.isCoolingDown) {
            return;
        }

        const mod = this.statMods[evt.data.stat];

        if (mod) {
            evt.data.modifiers.push({
                source: this.ability.name,
                mod,
            });
        }
    }
};
