import { loadImages } from './utils/ImageLoader';
import { Howler } from 'howler';

loadImages().then(() => {
    const { game } = require('./core/Game');

    window.game = game;
    window.ecs = game.ecs;

    game.start();
});

Howler.volume(0);
