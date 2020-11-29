import { computeAStar } from '../utils/AStar';
import { manhattanDistance } from '../utils/ManhattanDistance';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from './TileData';

const getClosestTile = (tiles, target) => {
    let closest = null;
    let closestDistance = null;

    tiles.data.forEach((tile) => {
        if (!tile.isType(TILE_TYPE_FLOOR)) {
            return;
        }

        const distance = manhattanDistance(tile, target);

        if (distance < closestDistance || closest === null) {
            closest = tile;
            closestDistance = distance;
            return;
        }
    });

    return closest;
}

export const digExit = (tiles, exit) => {
    const source = getClosestTile(tiles, exit);

    if (source.x === exit.x && source.y === exit.y) {
        tiles.setTileType(exit.x, exit.y, TILE_TYPE_FLOOR);
        return;
    }

    tiles.setTileType(source.x, source.y, TILE_TYPE_WALL);
    tiles.setTileType(exit.x, exit.y, TILE_TYPE_WALL);

    const result = computeAStar({
        start: {
            x: exit.x,
            y: exit.y
        },
        goal: {
            x: source.x,
            y: source.y,
        },
        cost: (a, b) => {
            if (tiles.isOnEdge(b.x, b.y)) {
                return Infinity
            }

            if (tiles.tileTypeMatches(b.x, b.y, TILE_TYPE_WALL)) {
                return manhattanDistance(a, b);
            }

            return Infinity;
        }
    });

    result.path.forEach((segment) => {
        tiles.setTileType(segment.x, segment.y, TILE_TYPE_FLOOR);
    });
};

export const digExits = (tiles, exits) => {
    exits.forEach((exit) => digExit(tiles, exit));
};
