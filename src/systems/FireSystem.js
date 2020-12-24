import { Combustible, Fire, IsDestroying, IsInventoried, Position } from '../ecs/components';
import { randomWeightedBool } from '../utils/rand';
import System from './System';

export default class FireSystem extends System {
    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [Fire, Combustible, Position],
            none: [IsInventoried, IsDestroying]
        });
    }

    update(dt) {
        if (!this.game.clock.turnDelta) {
            return;
        }

        this.query.get().forEach((entity) => {
            const pos = entity.position.getPos();
            const combustible = entity.combustible;

            combustible.fuel -= 1;

            const sparkChance = combustible.getSparkChance();
            const dieChance = combustible.getDieOutChance()
            const die = randomWeightedBool(dieChance);

            this.game.map
                .getNeighborEntities(pos.x, pos.y)
                .flat()
                .filter((e) => e.combustible)
                .forEach((neighbor) => {
                    neighbor.combustible.heat += 1;

                    const spark = randomWeightedBool(sparkChance);

                    if (spark) {
                        neighbor.fireEvent('spark');
                    }
                });

            if (die) {
                entity.fire.extinguish();

                this.game.particles.createParticle(pos.x, pos.y, {
                    lifetime: 1000,
                    fg1s: ['yellow', 'red'],
                    glyphs: ['.', '↑', '^'],
                });
            } else {
                this.game.particles.createParticle(pos.x, pos.y, {
                    lifetime: 1000,
                    fg1s: ['yellow', 'red'],
                    glyphs: ['.', '↑', '^'],
                });
            }
        });
    }
}
