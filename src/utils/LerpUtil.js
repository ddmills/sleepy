export const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
export const lerp2 = (v1, v2, t) => {
    return {
        x: lerp(v1.x, v2.x, t),
        y: lerp(v2.y, v2.x, t),
    };
};

window.lerp = lerp;
