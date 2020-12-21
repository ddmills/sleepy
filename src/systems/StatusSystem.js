import { getStatus } from '../data/Statuses';
import { Status } from '../ecs/components';
import System from './System';

export default class StatusSystem extends System {
    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [Status],
        });
    }

    update(dt) {
        if (!this.game.clock.tickDelta) {
            return;
        }

        const delta = this.game.clock.tickDelta;

        this.query.get().forEach((entity) => {
            entity.status.forEach((status) => {
                const statusType = getStatus(status.key);

                statusType.update(delta, entity, status);

                if (status.isCompleted()) {
                    status.destroy();
                }
            });
        });
    }
}
