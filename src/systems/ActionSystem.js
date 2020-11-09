import ecs from '../ecs';
import { Actor } from '../ecs/components';

const query = ecs.createQuery({
    all: [Actor],
});

export const update = (tick) => {
    query.get().forEach((entity) => {
        entity.fireEvent('tick');

        if (entity.actor.hasEnergy) {
            entity.fireEvent('take-action');
        }
    });
};
