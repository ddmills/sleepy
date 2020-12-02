import colorParse from 'color-parse';

const cache = {};

export const parseColor = (colorStr) => {
    if (!cache.hasOwnProperty(colorStr)) {
        const parsed = colorParse(colorStr).values;
        const data = [
            parsed[0],
            parsed[1],
            parsed[2],
            parsed.alpha,
        ];

        data.key = `${data[0]},${data[1]},${data[2]},${data[3]}`;

        cache[colorStr] = data;
    }

    return cache[colorStr];
};
