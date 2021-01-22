import {
    Compressable,
    IsDestroying,
    IsInventoried,
    Position,
} from '../ecs/components';
import System from './System';

export default class CompressionSystem extends System {
    constructor(game) {
        super(game);

        this.compressables = this.game.ecs.createQuery({
            all: [Compressable, Position],
            none: [IsInventoried, IsDestroying],
        });
    }

    update(dt) {
        if (!this.game.clock.tickDelta) {
            return;
        }

        this.compressables.get().forEach((compressableEntity) => {
            const compressable = compressableEntity.compressable;
            const pos = compressableEntity.position.getPos();
            const entities = this.game.map.getEntitiesAt(pos.x, pos.y);

            entities.forEach((entity) => {
                if (entity.id === compressableEntity.id) {
                    return;
                }
                if (!entity.mass) {
                    return;
                }
                if (entity.mass.value < compressable.massRequirement) {
                    return;
                }

                compressableEntity.glyph.ch = compressable.compressedCh;
                compressable.isCompressed = true;

                compressableEntity.fireEvent('compressed', {
                    interactor: entity,
                });
            });
        });
    }
}
