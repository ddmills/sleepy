import ecs from '../ecs';
import display from '../core/display';
import { Moniker, Actor } from '../ecs/components';
import * as ActionSystem from './ActionSystem';

const actors = ecs.createQuery({
    all: [Moniker, Actor],
});

export const update = (tick) => {
    const turn = ActionSystem.turn();
    const subTurn = `${ActionSystem.subTurn()}`.padEnd(3, '0');

    display.drawText(1, 1, `%c{cyan}Knossonia`);

    const entities = Array.from(actors.get());

    entities.forEach((entity, i) => {
        display.drawText(
            1,
            display.height - (2 + i),
            `energy (${entity.moniker.name}) %c{yellow}${entity.actor.energy}`
        );
    });

    display.drawText(
        display.width - 6 - `${turn}`.length,
        1,
        `%c{cyan}${turn}%c{white}.%c{yellow}${subTurn}`
    );
};
