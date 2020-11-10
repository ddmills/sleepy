import Renderer from './rendering/Renderer';
import InputController from './input/InputController';
import HungerSystem from '../systems/HungerSystem';
import ActionSystem from '../systems/ActionSystem';
import RenderSystem from '../systems/RenderSystem';
import MovementSystem from '../systems/MovementSystem';
import UISystem from '../systems/UISystem';

export default class Game {
    constructor() {
        this.renderer = new Renderer();
        this.inputController = new InputController(this.renderer);
        this.hungerSystem = new HungerSystem(this);
        this.actionSystem = new ActionSystem(this);
        this.movementSystem = new MovementSystem(this);
        this.renderSystem = new RenderSystem(this);
        this.UISystem = new UISystem(this);
    }

    start() {
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
