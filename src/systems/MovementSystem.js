import ecs from '../ecs';
import { MoveCommand, Position } from '../ecs/components';
import * as Directions from '../enums/Directions';

const commands = ecs.createQuery({
    all: [MoveCommand, Position],
});

export const update = (tick) => {
    commands.get().forEach((entity) => {
        const delta = Directions.delta(entity.moveCommand.direction);

        entity.fireEvent('TryMove', delta);

        entity.moveCommand.destroy();
    });
};
