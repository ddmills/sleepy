import SpriteSheet from './SpriteSheet';

const tileImage = document.getElementById('spritesheet-tiles');
const fontImage = document.getElementById('spritesheet-font');

export default [
    new SpriteSheet('tiles', tileImage),
    new SpriteSheet('font', fontImage),
];
