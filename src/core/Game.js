import Renderer from './rendering/RenderManager';
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
import GameStateManager from './GameStateManager';
import ClockManager from './ClockManager';
import CursorSystem from '../systems/CursorSystem';
import MapManager from './MapManager';
import ScreenCaptureManager from './ScreenCaptureManager';
import FOVSystem from '../systems/FOVSystem';
import MeleeSystem from '../systems/MeleeSystem';
import DeathSystem from '../systems/DeathSystem';
import ParticleSystem from '../systems/ParticleSystem';
import FactionManager from './FactionManager';
import CameraManager from './CameraManager';

export default class Game {
    #lastUpdate;

    get ecs() {
        return this.engine.engine;
    }

    constructor() {
        this.engine = new ECS();
        this.clock = new ClockManager(this);
        this.camera = new CameraManager(this);
        this.renderer = new Renderer(this);
        this.state = new GameStateManager(this);
        this.mouse = new MouseManager(this);
        this.map = new MapManager(this);
        this.factions = new FactionManager(this);
        this.player = new PlayerManager(this);
        this.screens = new ScreenManager(this);
        this.commands = new CommandManager(this);
        this.input = new InputController(this);
        this.screenCapture = new ScreenCaptureManager(this);

        this.hungerSystem = new HungerSystem(this);
        this.actionSystem = new ActionSystem(this);
        this.movementSystem = new MovementSystem(this);
        this.meleeSystem = new MeleeSystem(this);
        this.deathSystem = new DeathSystem(this);
        this.FOVSystem = new FOVSystem(this);
        this.renderSystem = new RenderSystem(this);
        this.UISystem = new UISystem(this);
        this.cursor = new CursorSystem(this);
        this.particles = new ParticleSystem(this);
    }

    start() {
        this.#lastUpdate = Date.now();
        this.state.newGame();
        requestAnimationFrame(this.loop.bind(this));
    }

    updateAdventureSystems(dt) {
        this.hungerSystem.update(dt);
        this.actionSystem.update(dt);
        this.movementSystem.update(dt);
        this.meleeSystem.update(dt);
        this.deathSystem.update(dt);
        this.FOVSystem.update(dt);
        this.renderSystem.update(dt);
        this.particles.update(dt);
        this.UISystem.update(dt);
    }

    loop(t) {
        const now = Date.now();
        const dt = now - this.#lastUpdate;

        this.screens.update(dt);

        this.#lastUpdate = now;

        requestAnimationFrame(this.loop.bind(this));
    }
}

export const game = new Game();
