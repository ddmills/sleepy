export const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBool = () => {
    return pickRandom([true, false]);
};

export const randomWeightedBool = (weight = .5) => {
    return Math.random() <= weight;
};
