import {
    SCREEN_MAIN_MENU,
    SCREEN_ADVENTURE,
    SCREEN_DEATH,
    SCREEN_INVENTORY,
    SCREEN_INTERACT_MODAL,
    SCREEN_CURSOR,
    SCREEN_LOAD_SECTOR,
    SCREEN_EQUIPMENT,
    SCREEN_LIST_SELECT,
    SCREEN_CHARACTER,
} from './ScreenType';
import AdventureScreen from './screens/AdventureScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import DeathScreen from './screens/DeathScreen';
import Manager from '../Manager';
import InventoryScreen from './screens/InventoryScreen';
import InteractModalScreen from './screens/InteractModalScreen';
import CursorScreen from './screens/CursorScreen';
import LoadSectorScreen from './screens/LoadSectorScreen';
import EquipmentScreen from './screens/EquipmentScreen';
import ListSelectionScreen from './screens/ListSelectionScreen';
import CharacterScreen from './screens/CharacterScreen';

export default class ScreenManager extends Manager {
    #screens = {};
    #screenStack = [];

    constructor(game) {
        super(game);
        this.#screens = {
            [SCREEN_MAIN_MENU]: new MainMenuScreen(game),
            [SCREEN_ADVENTURE]: new AdventureScreen(game),
            [SCREEN_DEATH]: new DeathScreen(game),
            [SCREEN_INVENTORY]: new InventoryScreen(game),
            [SCREEN_INTERACT_MODAL]: new InteractModalScreen(game),
            [SCREEN_CURSOR]: new CursorScreen(game),
            [SCREEN_LOAD_SECTOR]: new LoadSectorScreen(game),
            [SCREEN_EQUIPMENT]: new EquipmentScreen(game),
            [SCREEN_LIST_SELECT]: new ListSelectionScreen(game),
            [SCREEN_CHARACTER]: new CharacterScreen(game),
        };
        this.setScreen(SCREEN_MAIN_MENU);
    }

    get screenType() {
        return this.#screenStack[this.#screenStack.length - 1].type;
    }

    get screenCtx() {
        return this.#screenStack[this.#screenStack.length - 1].ctx;
    }

    get screen() {
        return this.#screens[this.screenType];
    }

    setScreen(screenType, ctx = {}) {
        while (this.#screenStack.length > 0) {
            this.screen.onLeave(ctx);
            this.#screenStack.pop();
        }

        this.#screenStack.push({
            type: screenType,
            ctx,
        });
        this.screen.onEnter(this.screenCtx);
    }

    replaceScreen(screenType, ctx = {}) {
        this.screen.onLeave(ctx);
        this.#screenStack.pop();
        this.#screenStack.push({
            type: screenType,
            ctx,
        });
        this.screen.onEnter(this.screenCtx);
    }

    pushScreen(screenType, ctx = {}) {
        this.screen.onLeave(ctx);
        this.#screenStack.push({
            type: screenType,
            ctx,
        });
        this.screen.onEnter(this.screenCtx);
    }

    popScreen(ctx = {}) {
        this.screen.onLeave(ctx);
        this.#screenStack.pop();
        this.screen.onEnter(this.screenCtx);
    }

    onInputCommand(cmd) {
        this.screen.onInputCommand(cmd);
    }

    update(dt) {
        this.screen.onUpdate(dt);
    }
}
