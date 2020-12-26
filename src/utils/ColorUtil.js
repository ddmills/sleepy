export const HSLToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255),
    ];
};

export const lerpHSL = (a, b, t) => {
    const deg = Math.trunc(lerp(a[0], b[0], t));
    const sat = Math.trunc(lerp(a[1], b[1], t));
    const light = Math.trunc(lerp(a[2], b[2], t));

    return HSLToRGB(deg, sat, light);
};

export const isWhite = (r, g, b) => r === 255 && g === 255 && b === 255;
export const isBlack = (r, g, b) => r === 0 && g === 0 && b === 0;
