import ecs from '../ecs';
import { Hunger } from '../ecs/components';

const hungers = ecs.createQuery({
    all: [Hunger],
});

export const update = (tick) => {
    hungers.get().forEach((entity) => {
        entity.hunger.value--;
    });
};
