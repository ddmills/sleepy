import {
    IsDestroying,
    IsInventoried,
    LiquidContainer,
    Position,
} from '../ecs/components';
import System from './System';

export default class LiquidSystem extends System {
    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [LiquidContainer, Position],
            none: [IsInventoried, IsDestroying],
        });
    }

    update(dt) {
        if (!this.game.clock.tickDelta) {
            return;
        }

        const pools = Array.from(this.query.get());

        pools.reduce((rv, pool) => {
            const container = pool.liquidContainer;

            if (!container.isFreeFlowing) {
                return rv;
            }

            const pos = pool.position.getPos();
            const liquid = container.content;
            const key = `${pos.x},${pos.y},${liquid}`;

            if (rv[key]) {
                rv[key].combineFrom(container);
            } else {
                rv[key] = container;
            }

            return rv;
        }, {});
    }
}
