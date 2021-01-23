import {
    HealthShard,
    IsDestroying,
    IsInventoried,
    Position,
} from '../ecs/components';
import System from './System';

export default class HealthShardSystem extends System {
    constructor(game) {
        super(game);

        this.shards = this.game.ecs.createQuery({
            all: [HealthShard, Position],
            none: [IsInventoried, IsDestroying],
        });
    }

    update(dt) {
        if (!this.game.clock.tickDelta) {
            return;
        }

        this.shards.get().forEach((shardEntity) => {
            const shard = shardEntity.healthShard;
            const pos = shardEntity.position.getPos();
            const entities = this.game.map.getEntitiesAt(pos.x, pos.y);

            entities.forEach((entity) => {
                if (!entity.healthShardConsumer) {
                    return;
                }

                entity.fireEvent('heal', {
                    value: shard.healValue,
                });

                this.game.particles.createEmitter(
                    pos.x,
                    pos.y,
                    {
                        rate: 2,
                        duration: 600,
                    },
                    {
                        glyphs: ['∙', '·'],
                        fg1s: ['red'],
                        speed: .05,
                        lifetime: 250,
                    }
                );

                shardEntity.add(IsDestroying);

                return;
            });
        });
    }
}
