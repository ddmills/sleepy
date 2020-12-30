import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_SAVE,
    INPUT_CMD_LOAD,
    INPUT_CMD_NEW_GAME,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE } from '../ScreenType';
import {
    UI_GLYPH_BORDER_T,
    UI_GLYPH_BORDER_TERM_L,
    UI_GLYPH_BORDER_TERM_R,
} from '../../../enums/UIGlyphs';
import { UI_BORDER_FG1, UI_BORDER_FG2 } from '../../../utils/UIWindowUtil';

export default class MainMenuScreen extends Screen {
    onEnter() {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);

        if (!this.game.state.isStarted) {
            this.game.music.play('BARDS_TALE');
        }
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onConfirm() {
        if (this.game.state.isStarted) {
            this.game.screens.setScreen(SCREEN_ADVENTURE);
        } else {
            this.game.state.newGame();
        }
    }

    inputCommand() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.onConfirm();
        }

        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.state.saveGame();
        }

        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.state.loadGame();
        }

        if (cmd.type === INPUT_CMD_NEW_GAME) {
            this.game.state.newGame();
        }
    }

    onUpdate(dt) {
        this.inputCommand();
        this.game.renderer.clear();
        this.game.renderer.draw(2, 1, '@', '#adb8bc', '#66a3dc');
        this.game.renderer.drawText(3, 1, ` Sleepy Crawler`, '#66a3dc');

        for (let i = 1; i < this.game.camera.width - 1; i++) {
            if (i === 1) {
                this.game.renderer.drawUI(
                    i,
                    2,
                    UI_GLYPH_BORDER_TERM_L,
                    UI_BORDER_FG1,
                    UI_BORDER_FG2
                );
            } else if (i === this.game.camera.width - 2) {
                this.game.renderer.drawUI(
                    i,
                    2,
                    UI_GLYPH_BORDER_TERM_R,
                    UI_BORDER_FG1,
                    UI_BORDER_FG2
                );
            } else {
                this.game.renderer.drawUI(
                    i,
                    2,
                    UI_GLYPH_BORDER_T,
                    UI_BORDER_FG1,
                    UI_BORDER_FG2
                );
            }
        }

        this.game.renderer.drawText(2, 4, `∙ Movement`);
        this.game.renderer.drawText(3, 6, `▬Q  ↑W  ↨E`);
        this.game.renderer.drawText(3, 7, `←A      →D`);
        this.game.renderer.drawText(3, 8, `∟Z  ↓X  ↔C`);
        this.game.renderer.drawText(
            3,
            10,
            `hold [SHIFT] and a direction to interact`
        );

        this.game.renderer.drawText(2, 12, `∙ Look [L]`);
        this.game.renderer.drawText(2, 13, `∙ Inventory [I]`);
        this.game.renderer.drawText(2, 14, `∙ Player Character [P]`);
        this.game.renderer.drawText(2, 15, `∙ Equipment [Y]`);
        this.game.renderer.drawText(2, 16, `∙ Confirm [ENTER]`);
        this.game.renderer.drawText(2, 17, `∙ Cancel [ESC]`);

        this.game.renderer.drawTextCenter(19, `set out into the forest...`);
        this.game.renderer.drawTextCenter(21, `press [ENTER]`, '#213942');
    }
}
