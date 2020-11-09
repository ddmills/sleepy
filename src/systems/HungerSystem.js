import ecs from '../ecs';
import { Eater } from '../ecs/components';
import { deltaTick } from './ActionSystem';

const eaters = ecs.createQuery({
    all: [Eater],
});

export const update = (dt) => {
    if (deltaTick > 0) {
        eaters.get().forEach((entity) => {
            entity.eater.hunger -= deltaTick;
        });
    }
};
