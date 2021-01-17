import { Status } from '../ecs/components';
import StatusBleeding from './statuses/StatusBleeding';
import StatusRegeneration from './statuses/StatusRegeneration';
import StatusStunned from './statuses/StatusStunned';

export const STATUS_BLEEDING = 'STATUS_BLEEDING';
export const STATUS_STUNNED = 'STATUS_STUNNED';
export const STATUS_REGENERATION = 'STATUS_REGENERATION';

const lookup = {
    STATUS_BLEEDING: new StatusBleeding(),
    STATUS_STUNNED: new StatusStunned(),
    STATUS_REGENERATION: new StatusRegeneration(),
};

export const getStatus = (key) => lookup[key];
export const addStatus = (key, entity, properties = {}) => {
    return entity.add(Status, {
        ...properties,
        key,
    });
};
