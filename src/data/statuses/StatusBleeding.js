import { LIQUID_BLOOD } from '../../enums/LiquidTypes';
import { STATUS_TYPE_CONDITION } from '../../enums/StatusTypes';
import { SPWN_POOL_LIQUID } from '../Spawnables';
import { spawn } from '../Spawner';
import { STATUS_BLEEDING } from '../Statuses';
import Status from './Status';

export default class StatusBleeding extends Status {
    constructor() {
        const glyph = {
            fg1: '#f42323',
            fg2: '#411010',
            bg: null,
            ch: 's',
        };
        super(STATUS_BLEEDING, 'Bleeding', STATUS_TYPE_CONDITION, glyph);
        this.isDot = true;
    }

    getDmgPerTurn(potency) {
        return 3 * potency + 0.5;
    }

    update(ticks, entity, status) {
        const tick = Math.min(ticks, status.remainingLifetime());
        const dmgPerTurn = this.getDmgPerTurn(status.potency);
        const damage = dmgPerTurn * (tick / 1000);

        entity.health.applyDamage(damage);

        const position = entity.position.getPos();

        spawn(SPWN_POOL_LIQUID, position.x, position.y, {
            content: LIQUID_BLOOD,
            volume: Math.ceil(damage * 6),
        });

        status.lifetime += tick;
    }
}
