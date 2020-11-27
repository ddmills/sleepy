import { IsPlayer, Moniker, IsVisible } from '../ecs/components';
import { liquids } from './LiquidTypes';

export const CONSOLE_EVENT_DAMAGE = 0;
export const CONSOLE_EVENT_DEAD = 1;
export const CONSOLE_EVENT_SHATTER = 2;

const getMonikerSubject = (entity) => {
    if (entity.has(Moniker)) {
        return `The ${entity.moniker.simpleDisplay.toLowerCase()}`;
    }

    return `The thing`;
};

const getMonikerIndirectObject = (entity) => {
    if (entity.has(IsPlayer)) {
        return 'you';
    }

    if (entity.has(Moniker)) {
        return `the ${entity.moniker.simpleDisplay.toLowerCase()}`;
    }
};

const mapping = {
    [CONSOLE_EVENT_DAMAGE]: {
        message(data) {
            return `${getMonikerSubject(data.target)} takes ${data.damage.value} ${data.damage.type} damage from ${getMonikerIndirectObject(data.source)}`;
        },
        shouldAppear(data) {
            return (data.target.has(IsPlayer) || data.target.has(IsVisible));
        }
    },
    [CONSOLE_EVENT_DEAD]: {
        message(data) {
            return `${getMonikerSubject(data.target)} takes ${data.damage.value} ${data.damage.type} damage from ${getMonikerIndirectObject(data.source)} and dies`;
        },
        shouldAppear(data) {
            return (data.target.has(IsPlayer) || data.target.has(IsVisible));
        }
    },
    [CONSOLE_EVENT_SHATTER]: {
        message(data) {
            if (isNaN(data.liquid)) {
                return `${getMonikerSubject(data.target)} shatters!`;
            } else {
                return `${getMonikerSubject(data.target)} shatters and spills its ${liquids[data.liquid].colorDesc} contents!`;
            }
        },
        shouldAppear(data) {
            return data.target.has(IsVisible);
        }
    }
};

export const getMessage = (evt, data) => {
    return mapping[evt].message(data);
};

export const shouldAppear = (evt, data) => {
    return mapping[evt].shouldAppear(data);
};

