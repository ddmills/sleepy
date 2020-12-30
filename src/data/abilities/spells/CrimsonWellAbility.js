import { game } from '../../../core/Game';
import { ABILITY_TYPE_SPELL } from '../../../enums/AbilityTypes';
import { ABILITY_CRIMSON_WELL, getAbilityStatus } from '../../Abilities';
import Attack from '../../Attack';
import { DMG_TYPE_NECROTIC } from '../../DamageTypes';
import { addStatus, STATUS_BLEEDING } from '../../Statuses';
import SimpleDurationAbility from '../SimpleDurationAbility';

export default class CrimsonWellAbility extends SimpleDurationAbility {
    key = ABILITY_CRIMSON_WELL;
    type = ABILITY_TYPE_SPELL;
    name = 'Crimson Well';

    getDuration(entity) {
        return 8000;
    }

    getCooldownDuration(entity) {
        return 50000;
    }

    getDescription(entity) {
        return `Siphon the blood of nearby enemies. Lifesteal +${4} HP from adjacent enemies per turn. You gain bleeding for the duration.`;
    }

    execute(entity, data) {
        super.execute(entity, data);
        addStatus(STATUS_BLEEDING, entity, {
            duration: this.getDuration(entity),
            potency: 0.5,
        });

        const status = getAbilityStatus(this.key, entity);

        this.performLifeteal(status);
    }

    performLifeteal(status) {
        const entity = status.entity;
        const pos = status.entity.position.getPos();
        game.map
            .getNeighborEntities(pos.x, pos.y)
            .flat()
            .filter((e) => game.factions.areEntitiesHostile(e, entity))
            .map((hostile) => {
                const attack = new Attack({
                    attacker: entity,
                    ignoreDodge: true,
                    defender: hostile,
                    weaponName: this.name,
                    damage: 3,
                    damageType: DMG_TYPE_NECROTIC,
                });

                const evt = hostile.fireEvent('attacked', { attack });

                if (evt.data.damage > 0) {
                    entity.fireEvent('heal', {
                        value: evt.data.damage,
                    });

                    const enemyPos = hostile.position.getPos();
                    game.particles.createEmitter(enemyPos.x, enemyPos.y, {
                        glyphs: ['·', 'x'],
                        fg1s: ['red'],
                        speed: 0.01,
                        lifetime: 120,
                    });
                }
            });

        game.particles.createEmitter(pos.x, pos.y, {
            glyphs: ['x', '·'],
            fg1s: ['red'],
            speed: 0.01,
            lifetime: 120,
        });
    }

    update(dt, status) {
        super.update(dt, status);

        if (game.clock.turnDelta <= 0 || status.isComplete) {
            return;
        }

        this.performLifeteal(status);
    }
}
