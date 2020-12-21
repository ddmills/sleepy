import { STATUS_TYPE_CONDITION } from '../../enums/StatusTypes';
import { STATUS_BLEEDING } from '../Statuses';
import Status from './Status';

export default class StatusBleeding extends Status {
    constructor() {
        super(STATUS_BLEEDING, 'Bleeding', STATUS_TYPE_CONDITION);
    }

    getDmgPerTurn(potency) {
        return 3 * potency + .5;
    }

    update(ticks, entity, status) {
        const tick = Math.min(ticks, status.remainingLifetime());
        const dmgPerTurn = this.getDmgPerTurn(status.potency);
        const damage = dmgPerTurn * (tick / 1000);

        entity.health.applyDamage(damage);

        status.lifetime += tick;
    }
}
