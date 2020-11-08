import ecs from '../ecs';
import { Brain } from '../ecs/components';

const query = ecs.createQuery({
    all: [Brain],
});

export const update = (tick) => {
    query.get().forEach((entity) => {
        entity.brain.energy++;

        if (entity.brain.energy >= 0) {
            entity.brain.energy = 0;
            entity.fireEvent('take-action');
        }
    });
};
