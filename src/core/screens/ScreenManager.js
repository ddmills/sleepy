import {
    SCREEN_MAIN_MENU,
    SCREEN_ADVENTURE,
    SCREEN_DEATH,
    SCREEN_INVENTORY,
    SCREEN_INTERACT_MODAL,
} from './ScreenType';
import AdventureScreen from './screens/AdventureScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import DeathScreen from './screens/DeathScreen';
import Manager from '../Manager';
import InventoryScreen from './screens/InventoryScreen';
import InteractModalScreen from './screens/InteractModalScreen';

export default class ScreenManager extends Manager {
    #screenType = SCREEN_MAIN_MENU;
    #screens = {};

    constructor(game) {
        super(game);
        this.#screens = {
            [SCREEN_MAIN_MENU]: new MainMenuScreen(game),
            [SCREEN_ADVENTURE]: new AdventureScreen(game),
            [SCREEN_DEATH]: new DeathScreen(game),
            [SCREEN_INVENTORY]: new InventoryScreen(game),
            [SCREEN_INTERACT_MODAL]: new InteractModalScreen(game),
        };
    }

    get screen() {
        return this.#screens[this.#screenType];
    }

    setScreen(screenType, ctx = {}) {
        this.screen.onLeave(ctx);
        this.#screenType = screenType;
        this.screen.onEnter(ctx);
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
