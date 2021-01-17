import { STATUS_TYPE_BOON } from '../../enums/StatusTypes';
import { STATUS_REGENERATION } from '../Statuses';
import Status from './Status';

export default class StatusRegeneration extends Status {
    constructor() {
        const glyph = {
            fg1: '#6baf70',
            fg2: '#9c9432',
            bg: null,
            ch: '}',
        };
        super(STATUS_REGENERATION, 'Regeneration', STATUS_TYPE_BOON, glyph);
        this.isDot = true;
    }

    update(ticks, entity, status) {
        const tick = Math.min(ticks, status.remainingLifetime());
        const hpPerTurn = 5;
        const value = Math.floor(hpPerTurn * (tick / 1000));

        entity.fireEvent('heal', {
            value
        });

        status.lifetime += tick;
    }
}
