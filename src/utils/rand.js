export const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
