import { SCREEN_MAIN_MENU, SCREEN_ADVENTURE } from './ScreenType';
import AdventureScreen from './screens/AdventureScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import Manager from '../Manager';

export default class ScreenManager extends Manager {
    #screenType = SCREEN_MAIN_MENU;
    #screens = {};

    constructor(game) {
        super(game);
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
        this.game.renderSystem.render();
    }

    onInputCommand(cmd) {
        this.screen.onInputCommand(cmd);
    }

    update(dt) {
        this.screen.onUpdate(dt);
    }

    onLoadGame(data) {
        this.setScreen(SCREEN_ADVENTURE);
    }
}
