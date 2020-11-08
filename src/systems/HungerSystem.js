import ecs from '../ecs';
import { Eater } from '../ecs/components';

const eaters = ecs.createQuery({
    all: [Eater],
});

export const update = (tick) => {
    eaters.get().forEach((entity) => {
        entity.eater.hunger--;
    });
};
