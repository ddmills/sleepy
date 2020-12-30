const directions = [
    {
        key: 0,
        shortName: 'NW',
        fullName: 'Northwest',
        delta: {
            x: -1,
            y: -1,
        },
    },
    {
        key: 1,
        shortName: 'N',
        fullName: 'North',
        delta: {
            x: 0,
            y: -1,
        },
    },
    {
        key: 2,
        shortName: 'NE',
        fullName: 'Northeast',
        delta: {
            x: 1,
            y: -1,
        },
    },
    {
        key: 3,
        shortName: 'W',
        fullName: 'West',
        delta: {
            x: -1,
            y: 0,
        },
    },
    {
        key: 4,
        shortName: 'Z',
        fullName: 'Here',
        delta: {
            x: 0,
            y: 0,
        },
        adjacent: [],
    },
    {
        key: 5,
        shortName: 'E',
        fullName: 'East',
        delta: {
            x: 1,
            y: 0,
        },
    },
    {
        key: 6,
        shortName: 'SW',
        fullName: 'Southwest',
        delta: {
            x: -1,
            y: 1,
        },
    },
    {
        key: 7,
        shortName: 'S',
        fullName: 'South',
        delta: {
            x: 0,
            y: 1,
        },
    },
    {
        key: 8,
        shortName: 'SE',
        fullName: 'Southeast',
        delta: {
            x: 1,
            y: 1,
        },
    },
];

export const DIR_NW = 0;
export const DIR_N = 1;
export const DIR_NE = 2;
export const DIR_W = 3;
export const DIR_Z = 4;
export const DIR_E = 5;
export const DIR_SW = 6;
export const DIR_S = 7;
export const DIR_SE = 8;

directions[DIR_NW].adjacent = [DIR_N, DIR_W];
directions[DIR_N].adjacent = [DIR_NW, DIR_NE];
directions[DIR_NE].adjacent = [DIR_N, DIR_E];
directions[DIR_W].adjacent = [DIR_NW, DIR_SW];
directions[DIR_E].adjacent = [DIR_NE, DIR_SE];
directions[DIR_SW].adjacent = [DIR_W, DIR_S];
directions[DIR_S].adjacent = [DIR_SW, DIR_SE];
directions[DIR_SE].adjacent = [DIR_S, DIR_E];

export const shortName = (direction) => directions[direction].shortName;

export const fullName = (direction) => directions[direction].fullName;

export const directionDelta = (direction) => directions[direction].delta;

export const adjacent = (direction) => directions[direction].adjacent;

export const getAdjacentDeltas = (direction) => adjacent(direction).map(delta);

export const directionFromDelta = (x, y) => {
    return Object.values(directions).find((dir) => {
        return dir.delta.x === x && dir.delta.y === y;
    });
};
