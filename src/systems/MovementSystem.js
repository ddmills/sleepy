import ecs from '../ecs';
import { MoveCommand, Position } from '../ecs/components';
import * as Directions from '../enums/Directions';

const commands = ecs.createQuery({
    all: [MoveCommand, Position],
});

export const update = (tick) => {
    commands.get().forEach((entity) => {
        const delta = Directions.delta(entity.moveCommand.direction);

        // todo move into `Legs` component and fire event
        entity.position.x += delta.x;
        entity.position.y += delta.y;

        entity.moveCommand.destroy();
    });
};
