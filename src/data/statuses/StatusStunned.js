import { game } from '../../core/Game';
import { IsIncapacitated } from '../../ecs/components';
import { STATUS_TYPE_CONDITION } from '../../enums/StatusTypes';
import { STATUS_STUNNED } from '../Statuses';
import Status from './Status';

export default class StatusStunned extends Status {
    constructor() {
        const glyph = {
            fg1: '#daa53a',
            fg2: '#f2da97',
            bg: null,
            ch: '|',
        };
        super(STATUS_STUNNED, 'Stunned', STATUS_TYPE_CONDITION, glyph);
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
            entity.isIncapacitated.destroy();
        }
    }
}
