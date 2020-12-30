import { game } from '../../../core/Game';
import { SCREEN_CURSOR } from '../../../core/screens/ScreenType';
import { ABILITY_TYPE_STUNT } from '../../../enums/AbilityTypes';
import { simpleLineRenderer } from '../../../utils/cursor/SimpleLineRenderer';
import { ABILITY_JUMP } from '../../Abilities';
import { getStat, STAT_ATHLETICISM } from '../../Stats';
import Ability from '../Ability';

export default class JumpAbility extends Ability {
    key = ABILITY_JUMP;
    type = ABILITY_TYPE_STUNT;
    name = 'Jump';

    getCooldownDuration(entity) {
        return 20000;
    }

    getJumpDistance(entity) {
        return Math.floor(Math.max(3, getStat(STAT_ATHLETICISM, entity)) / 3);
    }

    getDescription(entity) {
        const distance = this.getJumpDistance(entity);
        const word = distance > 1 ? 'tiles' : 'tile';

        return `Jump up to ${distance} ${word} away. You cannot jump over other creatures. [ATH]`;
    }

    initiate(entity, options) {
        game.screens.pushScreen(SCREEN_CURSOR, {
            renderer: simpleLineRenderer({
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

        entity.position.setPos(data.position.x, data.position.y);
    }
}
