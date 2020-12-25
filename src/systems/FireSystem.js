import { spawn } from '../data/Spawner';
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
            combustible.heat += 3;

            this.game.temperature.setTemperature(pos.x, pos.y, combustible.heat);

            const sparkChance = combustible.getSparkChance();
            const dieChance = combustible.getDieOutChance();

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

            if (combustible.isOutOfFuel) {
                entity.add(IsDestroying);

                if (combustible.spawnableRemains) {
                    spawn(combustible.spawnableRemains, pos.x, pos.y);
                }
            } else if (randomWeightedBool(dieChance)) {
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
