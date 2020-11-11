import Renderer from './rendering/Renderer';
import InputController from './input/InputController';
import HungerSystem from '../systems/HungerSystem';
import ActionSystem from '../systems/ActionSystem';
import RenderSystem from '../systems/RenderSystem';
import MovementSystem from '../systems/MovementSystem';
import UISystem from '../systems/UISystem';
import MouseManager from './input/MouseManager';
import CommandManager from './input/CommandManager';
import ScreenManager from './screens/ScreenManager';
import PlayerManager from './PlayerManager';
import ECS from '../ecs';

export default class Game {
    get ecs() {
        return this.engine.engine;
    }

    constructor() {
        this.engine = new ECS();
        this.renderer = new Renderer();
        this.mouseManager = new MouseManager();
        this.playerManager = new PlayerManager(this);
        this.screenManager = new ScreenManager(this);
        this.commandManager = new CommandManager(this);
        this.inputController = new InputController(this);
        this.hungerSystem = new HungerSystem(this);
        this.actionSystem = new ActionSystem(this);
        this.movementSystem = new MovementSystem(this);
        this.renderSystem = new RenderSystem(this);
        this.UISystem = new UISystem(this);
    }

    start() {
        this.playerManager.onStart();
        requestAnimationFrame(this.loop.bind(this));
    }

    loop(t) {
        const dt = 0;

        this.hungerSystem.update(dt);
        this.actionSystem.update(dt);
        this.movementSystem.update(dt);
        this.renderSystem.update(dt);
        this.UISystem.update(dt);

        requestAnimationFrame(this.loop.bind(this));
    }
}

export const game = new Game();
