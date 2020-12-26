import { addStatus, STATUS_BLEEDING } from '../data/Statuses';
import {
    IsDestroying,
    IsInventoried,
    Position,
    SharpTrap,
} from '../ecs/components';
import { CONSOLE_EVENT_TRAP_SHARP } from '../enums/ConsoleEvents';
import System from './System';

export default class TrapSystem extends System {
    constructor(game) {
        super(game);

        this.sharpTrapQuery = this.game.ecs.createQuery({
            all: [SharpTrap, Position],
            none: [IsInventoried, IsDestroying],
        });
    }

    update(dt) {
        if (!this.game.clock.turnDelta) {
            return;
        }

        this.sharpTrapQuery.get().forEach((trapEntity) => {
            const pos = trapEntity.position.getPos();
            const entities = this.game.map.getEntitiesAt(pos.x, pos.y);

            entities.forEach((entity) => {
                if (entity.id === trapEntity.id) {
                    return;
                }
                if (entity.stats) {
                    const saved = trapEntity.sharpTrap.test(entity);

                    if (!saved) {
                        addStatus(STATUS_BLEEDING, entity);
                        this.game.console.event(CONSOLE_EVENT_TRAP_SHARP, {
                            trap: trapEntity,
                            entity,
                        });
                    }
                }
            });
        });
    }
}
