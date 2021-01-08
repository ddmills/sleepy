import { game } from '../../core/Game';
import { SCREEN_WAIT } from '../../core/screens/ScreenType';
import { AbilityStatus } from '../../ecs/components';
import { ABILITY_TYPE_STANCE } from '../../enums/AbilityTypes';
import { getAbilityStatus } from '../Abilities';

export default class Ability {
    key = '';
    type = 0;
    name = '';
    isToggleable = false;
    isChanneled = false;

    get isStance() {
        return this.type === ABILITY_TYPE_STANCE;
    }

    getDescription(entity) {
        return '';
    }

    getCooldownDuration(entity) {
        return 5000;
    }

    getChannelDuration(entity) {
        return 0;
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
    }

    getSkillMods(entity) {
        return {};
    }

    toggleOn(entity) {
        entity.add(AbilityStatus, {
            key: this.key,
            isToggledOn: true,
            isCoolingDown: false,
            duration: this.getDuration(entity),
            cooldownDuration: this.getCooldownDuration(entity),
            statMods: this.getStatMods(entity),
            skillMods: this.getSkillMods(entity),
        });

        return true;
    }

    toggleOff(entity, status) {
        status.startCooldown();
    }

    channel(energy, status) {
        status.currentChannelDuration += energy;

        if (status.currentChannelDuration >= status.channelDuration) {
            energy = status.channelDuration - (status.currentChannelDuration - energy)
            status.currentChannelDuration = status.channelDuration;
            status.startCooldown();
        }

        const entity = status.entity;

        entity.fireEvent('energy-consumed', energy);

        return energy;
    }

    update(dt, status) {
        if (status.isCoolingDown) {
            status.currentCooldownDuration += dt;

            if (status.currentCooldownDuration > status.cooldownDuration) {
                status.currentCooldownDuration = status.cooldownDuration;
            }
        } else if (status.isComplete) {
            status.startCooldown();
        }

        if (status.isChanneling) {
            return;
        }

        if (!status.isComplete) {
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
