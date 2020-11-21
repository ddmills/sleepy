import { Health } from '../ecs/components';

export const LIQUID_WATER = 0;
export const LIQUID_HEALING = 1;

export const liquids = {
    [LIQUID_WATER]: {
        name: 'water',
        colorDesc: 'blue',
        primary: '#66a3dc',
        secondary: '#8bb9d5',
        onDrink: (entity) => {
            console.log("Mmm. earth juice. yummy?");
        }
    },
    [LIQUID_HEALING]: {
        name: 'blood',
        colorDesc: 'red',
        primary: '#ce2a36',
        secondary: '#e0c1c2',
        onDrink: (entity, volume) => {
            entity.fireEvent('heal', {
                value: volume * 2
            });
        }
    }
};

export const drinkLiquid = (entity, type, volume) => {
    liquids[type].onDrink(entity, volume);
};
