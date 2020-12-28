import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import { drawUIWindow } from '../../../utils/UIWindowUtil';
import { getAbility } from '../../../data/Abilities';
import { getAbilityTypeName } from '../../../enums/AbilityTypes';

export default class AbilitiesScreen extends Screen {
    width = 14;
    PADDING_RIGHT = 2;
    PADDING_HEIGHT = 6;
    character;
    list = new SelectableList();

    get left() {
        return Math.floor((this.game.camera.width - this.width) - this.PADDING_RIGHT);
    }

    get top() {
        return this.PADDING_HEIGHT;
    }

    get height() {
        return Math.floor((this.game.camera.height - this.PADDING_HEIGHT * 2));
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.character = ctx.character;

        this.refreshList();
    }

    refreshList() {
        const evt = this.character.fireEvent('query-abilities', {
            abilities: [],
        });

        this.list.setItems([
            ...evt.data.abilities.map((type) => getAbility(type)),
            {
                name: 'Back',
                isBack: true,
            },
        ]);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        const ability = this.list.selected;

        if (ability.isBack) {
            this.game.screens.popScreen();
            return;
        }

        const data = ability.initiate(this.character);

        ability.execute(this.character, data);

        this.game.screens.popScreen();
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.popScreen();
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.list.up();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.list.down();
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.selectItem();
        }
    }

    onUpdate(dt) {
        this.handleInput();

        drawUIWindow(
            this.left,
            this.top,
            this.width,
            this.height,
            'Abilities',
            this.character.glyph
        );

        let yOffset = this.top + 2;
        let xOffset = this.left + 2;

        this.list.data.forEach(({ item: ability, idx, isSelected }) => {
            if (isSelected) {
                this.game.renderer.drawText(
                    xOffset,
                    yOffset + idx,
                    `→ ${ability.name}`,
                    'yellow'
                );
            } else {
                this.game.renderer.drawText(xOffset, yOffset + idx, `- ${ability.name}`);
            }
        });

        const ability = this.list.selected;

        if (ability.isBack) {
            return;
        }

        const description = `${getAbilityTypeName(ability.type)}. ${ability.getDescription(this.character)}`;

        this.game.renderer.drawTextWrapping(
            xOffset,
            yOffset + this.list.length + 1,
            this.width - 1,
            description
        );
    }
}
