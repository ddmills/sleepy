import { game } from '../../core/Game';
import { IsIncapacitated } from '../../ecs/components';
import { STATUS_TYPE_CONDITION } from '../../enums/StatusTypes';
import { STATUS_STUNNED } from '../Statuses';
import Status from './Status';

export default class StatusStunned extends Status {
    constructor() {
        super(STATUS_STUNNED, 'Stunned', STATUS_TYPE_CONDITION);
    }

    update(ticks, entity, status) {
        status.lifetime += ticks;

        if (!entity.isIncapacitated) {
            entity.add(IsIncapacitated);

            const pos = entity.position.getPos();

            game.particles.createParticle(pos.x, pos.y, {
                lifetime: 140,
                fg1s: ['yellow'],
                glyphs: ['*'],
            });
        }

        if (status.isCompleted()) {
            entity.remove(IsIncapacitated);
        }
    }
}
