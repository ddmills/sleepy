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
        duration: 10000,
        currentDuration: 0,
        channelDuration: 0,
        currentChannelDuration: 0,
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

    get remainingDuration() {
        if (this.isCoolingDown) {
            return 0;
        }

        return this.duration - this.currentDuration;
    }

    get isChanneling() {
        return this.currentChannelDuration < this.channelDuration;
    }

    get isComplete() {
        return this.currentDuration >= this.duration || (this.ability.isToggleable && !this.isToggledOn);
    }

    get isCooldownComplete() {
        return (
            this.isCoolingDown &&
            this.currentCooldownDuration >= this.cooldownDuration
        );
    }

    startCooldown() {
        this.isCoolingDown = true;
        this.isToggledOn = false;
    }

    onQuerySkillMod(evt) {
        if (this.isComplete) {
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
}
