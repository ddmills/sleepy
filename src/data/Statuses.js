import StatusBleeding from './statuses/StatusBleeding';

export const STATUS_BLEEDING = 'STATUS_BLEEDING';

const lookup = {
    [STATUS_BLEEDING]: new StatusBleeding(),
};

export const getStatus = (key) => lookup[key];
