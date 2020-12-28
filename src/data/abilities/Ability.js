import { getAbilityStatus } from '../Abilities';

export default class Ability {
    key = '';
    type = 0;
    name = '';
    description = '';
    isToggleable = false;

    getDescription(entity) {
        return '';
    }

    constructor(key, type, name) {
        this.key = key;
        this.type = type;
        this.name = name;
    }

    initiate(entity) {
    }

    execute(entity, data) {
    }

    getStatMods(entity) {
        return {};
    };
    getSkillMods(entity) {
        return {};
    };

    updateAbilityStatus(dt, status) {
        if (status.isCoolingDown) {
            status.currentCooldownDuration += dt;
        } else if (status.isToggleDurationComplete){
            status.startCooldown();
        }

        if (status.isToggledOn){
            status.currentToggleDuration += dt;
        }

        if (status.isCooldownComplete) {
            status.destroy();
        }
    }

    getDisplayText(entity) {
        const status = getAbilityStatus(this.key, entity);

        if (status && status.isCoolingDown) {
            const cd = (status.remainingCooldownDuration / 1000).toFixed(1);

            return {
                text: `${this.name} [${cd}]`,
                isEnabled: false,
            };
        }

        if (this.isToggleable) {
            if (status && status.isToggledOn) {
                return {
                    text: `${this.name} [toggle OFF]`,
                    isEnabled: true,
                };
            } else {
                return {
                    text: `${this.name} [toggle ON]`,
                    isEnabled: true,
                };
            }
        }

        return {
            text: this.name,
            isEnabled: true,
        };
    }
}
