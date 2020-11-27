import { TILE_TYPE_FLOOR } from './TileData';

export const digConnections = (tiles, connections) => {
    const northPaths = connections.north.map((north) => {
        // dig south from top until hit empty
        for (let i = 0; i < tiles.height; i++) {
            if (tiles.tileTypeMatches(12, i, TILE_TYPE_FLOOR)) {
                return true;
            } else {
                tiles.setTileType(12, i, TILE_TYPE_FLOOR);
            }
        }

        return false;
    });

    if (northPaths.some((isConnected) => isConnected === false)) {
        console.log('CONNECTION north FAILED! regenerate');
    }

    const southPaths = connections.south.map((south) => {
        for (let i = tiles.height - 1; i > 0; i--) {
            if (tiles.tileTypeMatches(12, i, TILE_TYPE_FLOOR)) {
                return true;
            } else {
                tiles.setTileType(12, i, TILE_TYPE_FLOOR);
            }
        }

        return false;
    });

    if (southPaths.some((isConnected) => isConnected === false)) {
        console.log('CONNECTION south FAILED! regenerate');
    }

    const westPaths = connections.west.map((west) => {
        // dig east from left until hit empty
        for (let i = 0; i < tiles.width; i++) {
            if (tiles.tileTypeMatches(i, 12, TILE_TYPE_FLOOR)) {
                return true;
            } else {
                tiles.setTileType(i, 12, TILE_TYPE_FLOOR);
            }
        }

        return false;
    });

    if (westPaths.some((isConnected) => isConnected === false)) {
        console.log('CONNECTION west FAILED! regenerate');
    }

    const eastPaths = connections.east.map((east) => {
        // dig west from right until hit empty
        for (let i = tiles.width - 1; i > 0; i--) {
            if (tiles.tileTypeMatches(i, 12, TILE_TYPE_FLOOR)) {
                return true;
            } else {
                tiles.setTileType(i, 12, TILE_TYPE_FLOOR);
            }
        }

        return false;
    });

    if (eastPaths.some((isConnected) => isConnected === false)) {
        console.log('CONNECTION east FAILED! regenerate');
    }
};
