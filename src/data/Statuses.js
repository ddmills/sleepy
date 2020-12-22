import { Status } from '../ecs/components';
import StatusBleeding from './statuses/StatusBleeding';
import StatusStunned from './statuses/StatusStunned';

export const STATUS_BLEEDING = 'STATUS_BLEEDING';
export const STATUS_STUNNED = 'STATUS_STUNNED';

const lookup = {
    STATUS_BLEEDING: new StatusBleeding(),
    STATUS_STUNNED: new StatusStunned(),
};

export const getStatus = (key) => lookup[key];
export const addStatus = (key, entity) => {
    return entity.add(Status, {
        key
    });
};
