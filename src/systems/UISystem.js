import ecs from '../ecs';
import Display from '../core/rendering/Display';
import { Moniker, Actor } from '../ecs/components';
import * as ActionSystem from './ActionSystem';

const actors = ecs.createQuery({
    all: [Moniker, Actor],
});

export const update = (tick) => {
    const turn = ActionSystem.turn();
    const subTurn = `${ActionSystem.subTurn()}`.padEnd(3, '0');

    Display.drawText(1, 1, `%c{cyan}Knossonia`);

    const entities = Array.from(actors.get());

    entities.forEach((entity, i) => {
        Display.drawText(
            1,
            Display.height - (2 + i),
            `energy (${entity.moniker.name}) %c{yellow}${entity.actor.energy}`
        );
    });

    Display.drawText(
        Display.width - 6 - `${turn}`.length,
        1,
        `%c{cyan}${turn}%c{white}.%c{yellow}${subTurn}`
    );
};
