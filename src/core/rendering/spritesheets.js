import SpriteSheet from './SpriteSheet';

export default () => {
    const tileImage = document.getElementById('spritesheet-tiles');
    const fontImage = document.getElementById('spritesheet-font');
    const uiImage = document.getElementById('spritesheet-ui');

    return [
        new SpriteSheet('tiles', tileImage),
        new SpriteSheet('font', fontImage),
        new SpriteSheet('ui', uiImage),
    ];
};
