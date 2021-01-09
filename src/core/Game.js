import Renderer from './rendering/RenderManager';
import InputController from './input/InputController';
import ActionSystem from '../systems/ActionSystem';
import RenderSystem from '../systems/RenderSystem';
import UISystem from '../systems/UISystem';
import MouseManager from './input/MouseManager';
import CommandManager from './input/CommandManager';
import ScreenManager from './screens/ScreenManager';
import PlayerManager from './PlayerManager';
import ECS from '../ecs';
import GameStateManager from './GameStateManager';
import ClockManager from './ClockManager';
import MapManager from './MapManager';
import FOVSystem from '../systems/FOVSystem';
import DeathSystem from '../systems/DeathSystem';
import ParticleSystem from '../systems/ParticleSystem';
import FactionManager from './FactionManager';
import CameraManager from './CameraManager';
import FPSMonitoringSystem from '../systems/FPSMonitoringSystem';
import { WorldManager } from './WorldManager';
import ConsoleManager from './ConsoleManager';
import DestroySystem from '../systems/DestroySystem';
import MusicManager from './MusicManager';
import StatusSystem from '../systems/StatusSystem';
import LiquidSystem from '../systems/LiquidSystem';
import TrapSystem from '../systems/TrapSystem';
import FireSystem from '../systems/FireSystem';
import TemperatureSystem from '../systems/TemperatureSystem';
import AbilitySystem from '../systems/AbilitySystem';
import BitmaskManager from './BitmaskManager';

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
        this.state = new GameStateManager(this);
        this.world = new WorldManager(this);
        this.map = new MapManager(this);
        this.camera = new CameraManager(this);
        this.factions = new FactionManager(this);
        this.player = new PlayerManager(this);
        this.commands = new CommandManager(this);
        this.screens = new ScreenManager(this);
        this.input = new InputController(this);
        this.console = new ConsoleManager(this);
        this.bitmasks = new BitmaskManager(this);

        this.actionSystem = new ActionSystem(this);
        this.deathSystem = new DeathSystem(this);
        this.statusSystem = new StatusSystem(this);
        this.FOVSystem = new FOVSystem(this);
        this.renderSystem = new RenderSystem(this);
        this.UISystem = new UISystem(this);
        this.particles = new ParticleSystem(this);
        this.fps = new FPSMonitoringSystem(this);
        this.destroySystem = new DestroySystem(this);
        this.liquidSystem = new LiquidSystem(this);
        this.trapSystem = new TrapSystem(this);
        this.fireSystem = new FireSystem(this);
        this.temperature = new TemperatureSystem(this);
        this.abilities = new AbilitySystem(this);
    }

    start() {
        this.#lastUpdate = Date.now();
        this.boundLoop = this.loop.bind(this);
        requestAnimationFrame(this.loop.bind(this));
    }

    updateAdventureSystems(dt) {
        for (let i = 0; i < 20; i++) {
            this.clock.update(dt);
            const playerTurn = this.actionSystem.update(dt);

            if (playerTurn) {
                this.updatePlayerSystems(dt);
            }

            this.liquidSystem.update(dt);
            this.trapSystem.update(dt);
            this.fireSystem.update(dt);
            this.temperature.update(dt);
            this.statusSystem.update(dt);
            this.abilities.update(dt);
            this.deathSystem.update(dt);
            this.destroySystem.update(dt);

            if (playerTurn) {
                return;
            }
        }
    }

    updatePlayerSystems(dt) {
        this.FOVSystem.update(dt);
        this.renderSystem.update(dt);
        this.particles.update(dt);
        this.UISystem.update(dt);
        this.map.update(dt);
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
