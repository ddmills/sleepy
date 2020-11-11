import { SCREEN_MAIN_MENU, SCREEN_ADVENTURE } from './ScreenType';
import AdventureScreen from './screens/AdventureScreen';
import MainMenuScreen from './screens/MainMenuScreen';

export default class ScreenManager {
    #game = null;
    #screenType = SCREEN_MAIN_MENU;
    #screens = {};

    constructor(game) {
        this.#game = game;
        this.#screens = {
            [SCREEN_MAIN_MENU]: new MainMenuScreen(game),
            [SCREEN_ADVENTURE]: new AdventureScreen(game),
        };
    }

    get screen() {
        return this.#screens[this.#screenType];
    }

    setScreen(screenType) {
        this.screen.onLeave();
        this.#screenType = screenType;
        this.screen.onEnter();
    }

    onInputCommand(cmd) {
        this.screen.onInputCommand(cmd);
    }
}
