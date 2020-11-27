import { game } from '../core/Game';

export const LIQUID_WATER = 0;
export const LIQUID_BLOOD = 1;
export const LIQUID_HONEY = 3;

export const liquids = {
    [LIQUID_WATER]: {
        name: 'water',
        colorDesc: 'watery',
        primary: '#66a3dc',
        secondary: '#8bb9d5',
        onDrink: (entity) => {
            console.log('Mmm. earth juice. yummy');
        },
    },
    [LIQUID_BLOOD]: {
        name: 'blood',
        colorDesc: 'bloody',
        primary: '#ce2a36',
        secondary: '#e0c1c2',
        onDrink: (entity, volume) => {
            console.log('blood. this would make a good syrup');
            entity.fireEvent('heal', {
                value: volume * 1,
            });
        },
    },
    [LIQUID_HONEY]: {
        name: 'honey',
        colorDesc: 'gooey golden',
        primary: '#d6aa3a',
        secondary: '#f4d260',
        onDrink: (entity, volume) => {
            const pos = entity.position.getPos();

            game.particles.createEmitter(pos.x, pos.y - 1, {
                direction: {
                    x: 0,
                    y: -1,
                },
                glyphs: ['.', '○'],
                fg1s: ['#d6aa3a'],
                speed: 0.02,
                lifetime: 500,
            });

            entity.fireEvent('heal', {
                value: volume * 2,
            });
        },
    },
};

export const drinkLiquid = (entity, type, volume) => {
    liquids[type].onDrink(entity, volume);
};
