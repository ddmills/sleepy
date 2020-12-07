export const diagonalDistance = (a, b) => {
    const dx = Math.abs(a.x - b.x);
    const dy = Math.abs(a.y - b.y);

    return 1 * (dx + dy) + (1.41 - 2 * 1) * Math.min(dx, dy);
};
