import ecs from '../ecs';
import { MoveCommand, Position } from '../ecs/components';
import * as Directions from '../enums/Directions';
import System from './System';
import { INPUT_CMD_MOVE_NW } from '../core/input/InputCommandType';

export default class MovementSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [MoveCommand, Position],
        });
    }

    update(dt) {
        this.#query.get().forEach((entity) => {
            const delta = Directions.delta(entity.moveCommand.direction);

            entity.fireEvent('TryMove', delta);

            entity.moveCommand.destroy();
        });
    }
}
