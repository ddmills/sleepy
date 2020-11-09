import ecs from '../ecs';
import { Actor } from '../ecs/components';

const query = ecs.createQuery({
    all: [Actor],
});

export let tick = 0;
export let deltaTick = 0;

export const turn = () => {
    return Math.floor(tick / 1000);
};

export const subTurn = () => {
    return tick - turn() * 1000;
};

export const update = (dt) => {
    const entities = query.get();
    const sorted = Array.from(entities);
    sorted.sort((a, b) => (a.actor.energy < b.actor.energy ? 1 : -1));

    const entity = sorted[0];
    deltaTick = 0;

    if (!entity.actor.hasEnergy) {
        deltaTick = entity.actor.energy * -1;
        tick -= entity.actor.energy;

        entities.forEach((entity) => {
            entity.actor.addEnergy(deltaTick);
        });
    }

    if (entity.actor.hasEnergy && !entity.isPlayer) {
        entity.fireEvent('take-action');
    }
};
