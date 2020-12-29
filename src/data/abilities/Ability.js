import { AbilityStatus } from '../../ecs/components';
import { getAbilityStatus } from '../Abilities';

export default class Ability {
    key = '';
    type = 0;
    name = '';
    isToggleable = false;

    getDescription(entity) {
        return '';
    }

    getCooldownDuration(entity) {
        return 5000;
    }

    constructor(key, type, name) {
        this.key = key;
        this.type = type;
        this.name = name;
    }

    initiate(entity, options) {
        options.onConfirm();
    }

    execute(entity, data) {
        entity.add(AbilityStatus, {
            key: this.key,
            isCoolingDown: true,
            cooldownDuration: this.getCooldownDuration(entity),
        });
    }

    getStatMods(entity) {
        return {};
    };
    getSkillMods(entity) {
        return {};
    };

    update(dt, status) {
        if (status.isCoolingDown) {
            status.currentCooldownDuration += dt;
        } else if (status.isComplete){
            status.startCooldown();
        }

        if (status.isToggledOn){
            status.currentDuration += dt;
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
