import { game } from './core/Game';

window.game = game;
window.ecs = game.ecs;

game.start();
