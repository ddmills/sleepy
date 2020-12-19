import { getDmgTypeVerb } from '../data/DamageTypes';
import { IsPlayer, Moniker, IsVisible } from '../ecs/components';
import { liquids } from './LiquidTypes';

export const CONSOLE_EVENT_DAMAGE = 0;
export const CONSOLE_EVENT_DEAD = 1;
export const CONSOLE_EVENT_SHATTER = 2;
export const CONSOLE_EVENT_MISS = 3;
export const CONSOLE_EVENT_BLOCK = 4;

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
    [CONSOLE_EVENT_MISS]: {
        message(data) {
            const attacker = getMonikerIndirectObject(data.attacker);
            const defender = getMonikerSubject(data.defender);

            return `${defender} dodged an attack from ${attacker} (${data.dodgePrcnt}%)`;
        },
        shouldAppear(data) {
            return data.defender.has(IsPlayer) || data.attacker.has(IsVisible);
        },
    },
    [CONSOLE_EVENT_DAMAGE]: {
        message(data) {
            const source = getMonikerSubject(data.source);
            const target = getMonikerIndirectObject(data.target);
            const dmgVerb = getDmgTypeVerb(data.damageType);
            const dmg = data.damage;
            const blocked = data.blocked;

            const blockText = blocked > 0 ? `. (${blocked} damage was blocked)` : ''

            return `${source} ${dmgVerb} ${target} for ${dmg} hp${blockText}`;
        },
        shouldAppear(data) {
            return data.target.has(IsPlayer) || data.target.has(IsVisible);
        },
    },
    [CONSOLE_EVENT_DEAD]: {
        message(data) {
            const source = getMonikerSubject(data.source);
            const target = getMonikerIndirectObject(data.target);
            const dmgVerb = getDmgTypeVerb(data.damageType);

            return `${source} ${dmgVerb} ${target} to death`;
        },
        shouldAppear(data) {
            return data.target.has(IsPlayer) || data.target.has(IsVisible);
        },
    },
    [CONSOLE_EVENT_SHATTER]: {
        message(data) {
            if (isNaN(data.liquid)) {
                return `${getMonikerSubject(data.target)} shatters!`;
            } else {
                return `${getMonikerSubject(
                    data.target
                )} shatters and spills its ${
                    liquids[data.liquid].colorDesc
                } content!`;
            }
        },
        shouldAppear(data) {
            return data.target.has(IsVisible);
        },
    },
};

export const getMessage = (evt, data) => {
    return mapping[evt].message(data);
};

export const shouldAppear = (evt, data) => {
    return mapping[evt].shouldAppear(data);
};
