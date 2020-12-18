import { loadImages } from './utils/ImageLoader';
import { Howl } from 'howler';

loadImages().then(() => {
    const { game } = require('./core/Game');

    window.game = game;
    window.ecs = game.ecs;

    game.start();
});

var sound = new Howl({
    src: ['/resources/music/menu.wav'],
    loop: true,
    volume: 0.25,
});

sound.play();
