import Renderer from './rendering/RenderManager';
import InputController from './input/InputController';
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
import FOVSystem from '../systems/FOVSystem';
import MeleeSystem from '../systems/MeleeSystem';
import DeathSystem from '../systems/DeathSystem';
import ParticleSystem from '../systems/ParticleSystem';
import FactionManager from './FactionManager';
import CameraManager from './CameraManager';
import FPSMonitoringSystem from '../systems/FPSMonitoringSystem';
import { WorldManager } from './WorldManager';
import ConsoleManager from './ConsoleManager';
import DestroySystem from '../systems/DestroySystem';
import MusicManager from './MusicManager';

export default class Game {
    #lastUpdate;

    get ecs() {
        return this.engine.engine;
    }

    constructor() {
        this.engine = new ECS(this);
        this.music = new MusicManager(this);
        this.mouse = new MouseManager(this);
        this.clock = new ClockManager(this);
        this.renderer = new Renderer(this);
        this.camera = new CameraManager(this);
        this.state = new GameStateManager(this);
        this.world = new WorldManager(this);
        this.map = new MapManager(this);
        this.factions = new FactionManager(this);
        this.player = new PlayerManager(this);
        this.commands = new CommandManager(this);
        this.screens = new ScreenManager(this);
        this.input = new InputController(this);
        this.console = new ConsoleManager(this);

        this.actionSystem = new ActionSystem(this);
        this.movementSystem = new MovementSystem(this);
        this.meleeSystem = new MeleeSystem(this);
        this.deathSystem = new DeathSystem(this);
        this.FOVSystem = new FOVSystem(this);
        this.renderSystem = new RenderSystem(this);
        this.UISystem = new UISystem(this);
        this.cursor = new CursorSystem(this);
        this.particles = new ParticleSystem(this);
        this.fps = new FPSMonitoringSystem(this);
        this.destroySystem = new DestroySystem(this);
    }

    start() {
        this.#lastUpdate = Date.now();
        this.boundLoop = this.loop.bind(this);
        requestAnimationFrame(this.loop.bind(this));
    }

    updateAdventureSystems(dt) {
        this.clock.update(dt);
        this.actionSystem.update(dt);
        this.movementSystem.update(dt);
        this.meleeSystem.update(dt);
        this.deathSystem.update(dt);
        this.FOVSystem.update(dt);
        this.renderSystem.update(dt);
        this.particles.update(dt);
        this.UISystem.update(dt);
        this.map.update(dt);
        this.destroySystem.update(dt);
        this.console.render(dt);
    }

    loop(t) {
        const now = Date.now();
        const dt = now - this.#lastUpdate;

        this.screens.update(dt);
        this.fps.update(dt);
        this.renderer.render();

        this.#lastUpdate = now;

        requestAnimationFrame(this.boundLoop);
    }
}

export const game = new Game();
