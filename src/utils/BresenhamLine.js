export const bresenhamLine = (x0, y0, x1, y1) => {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    const result = [];

    let err = dx - dy;

    while(true) {
        result.push({
            x: x0,
            y: y0,
        });

        if ((x0 === x1) && (y0 === y1)) {
            break;
        }

        const e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy; x0 += sx;
        }
        if (e2 < dx) {
            err += dx; y0 += sy;
        }
    }

    return result;
}

export const bresenhamLineExclusive = (x0, y0, x1, y1) => {
    const line = bresenhamLine(x0, y0, x1, y1);

    line.shift();
    line.pop();

    return line;
}
