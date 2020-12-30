import { game } from '../../../core/Game';
import { SCREEN_CURSOR } from '../../../core/screens/ScreenType';
import { ABILITY_TYPE_SPELL } from '../../../enums/AbilityTypes';
import { simpleCursorRenderer } from '../../../utils/cursor/SimpleCursorRenderer';
import { ABILITY_BLINK } from '../../Abilities';
import Ability from '../Ability';

export default class BlinkAbility extends Ability {
    key = ABILITY_BLINK;
    type = ABILITY_TYPE_SPELL;
    name = 'Blink';

    getCooldownDuration(entity) {
        return 20000;
    }

    getDescription(entity) {
        return `Teleport to a visible location.`;
    }

    initiate(entity, options) {
        game.screens.pushScreen(SCREEN_CURSOR, {
            renderer: simpleCursorRenderer({
                isValid: ({ x, y }) => {
                    // must be visible
                    const visible = game.map
                        .getEntitiesAt(x, y, true)
                        .filter((e) => e.isVisible);

                    // must be at least one entity visible
                    if (visible.length <= 0) {
                        return false;
                    }

                    // must not be any blocker or beings
                    return !visible.some((e) => e.blocker || e.body);
                },
            }),
            onResult: (result) => {
                game.screens.popScreen();
                options.onConfirm(result);
            },
            onCancel: () => {
                game.screens.popScreen();
                options.onCancel();
            },
        });
    }

    execute(entity, data) {
        super.execute(entity, data);

        const prevPos = entity.position.getPos();
        const nextPos = data.position;

        game.particles.createEmitter(prevPos.x, prevPos.y, {
            glyphs: ['O', 'o', '·'],
            fg1s: ['purple'],
            speed: 1,
            lifetime: 300,
        });

        entity.position.setPos(data.position.x, data.position.y);

        game.particles.createEmitter(nextPos.x, nextPos.y, {
            glyphs: ['·', 'o', 'O'],
            fg1s: ['purple'],
            speed: 1,
            lifetime: 300,
        });
    }
}
