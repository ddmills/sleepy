import SpriteSheet from './SpriteSheet';

export default () => {
    const tileImage = document.getElementById('spritesheet-tiles');
    const fontImage = document.getElementById('spritesheet-font');

    return [
        new SpriteSheet('tiles', tileImage),
        new SpriteSheet('font', fontImage),
    ];
}
