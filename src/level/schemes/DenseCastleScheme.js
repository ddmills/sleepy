import { digExits } from '../LevelConnections';
import TileContainer from '../TileContainer';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import { pickRandom, randomInt } from '../../utils/rand';
import { computeAStar } from '../../utils/AStar';
import { diagonalDistance } from '../../utils/diagonalDistance';
import TileScheme from '../TileScheme';

const VERTICAL = 0;
const HORIZONTAL = 1;

let curId = 1;
const createNodeId = () => curId++;

const splitNodeVertical = (node, cut) => {
    const leftId = createNodeId();
    const rightId = createNodeId();
    const left = {
        id: leftId,
        isLeaf: true,
        parentId: node.id,
        siblingId: rightId,
        offsetX: node.offsetX,
        offsetY: node.offsetY,
        width: cut,
        height: node.height,
    };
    const right = {
        id: rightId,
        isLeaf: true,
        parentId: node.id,
        siblingId: leftId,
        offsetX: node.offsetX + cut,
        offsetY: node.offsetY,
        width: node.width - cut,
        height: node.height,
    };
    return [left, right];
};

const splitNodeHorizontal = (node, cut) => {
    const topId = createNodeId();
    const bottomId = createNodeId();
    const top = {
        id: topId,
        isLeaf: true,
        parentId: node.id,
        siblingId: bottomId,
        offsetX: node.offsetX,
        offsetY: node.offsetY,
        width: node.width,
        height: cut,
    };
    const bottom = {
        id: bottomId,
        isLeaf: true,
        parentId: node.id,
        siblingId: topId,
        offsetX: node.offsetX,
        offsetY: node.offsetY + cut,
        width: node.width,
        height: node.height - cut,
    };

    return [top, bottom];
};

export class DenseCastleScheme extends TileScheme {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const exits = settings.exits || [];

        const minRoomWidth = settings.minRoomWidth || 4;
        const minRoomHeight = settings.minRoomHeight || 4;

        const maxRoomWidth = settings.maxRoomWidth || 12;
        const maxRoomHeight = settings.maxRoomHeight || 12;

        const splitIgnoreChance = settings.splitIgnoreChance || 0.8;

        const loopiness = settings.loopiness || 35;

        const tiles = new TileContainer(width, height);

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                if (i === 0 || i === width - 1 || j === 0 || j === height - 1) {
                    tiles.setTileType(i, j, TILE_TYPE_WALL);
                } else {
                    tiles.setTileType(i, j, TILE_TYPE_FLOOR);
                }
            }
        }

        const nodes = [
            {
                isLeaf: true,
                parentId: null,
                siblingId: null,
                id: createNodeId(),
                offsetX: 0,
                offsetY: 0,
                height: height - 1,
                width: width - 1,
            },
        ];

        const graph = [];

        while (nodes.length > 0) {
            const node = nodes.pop();
            graph.push(node);

            if (node.width < maxRoomWidth && node.height < maxRoomHeight) {
                const ignoreSplit = Math.random() < splitIgnoreChance;

                if (ignoreSplit) {
                    continue;
                }
            }

            const directions = [];

            if (node.width - minRoomWidth - 1 > minRoomWidth) {
                directions.push(VERTICAL);
            }

            if (node.height - minRoomHeight - 1 > minRoomHeight) {
                directions.push(HORIZONTAL);
            }

            if (directions.length <= 0) {
                continue;
            }

            const direction = pickRandom(directions);

            if (direction === VERTICAL) {
                const cut = randomInt(
                    minRoomWidth + 1,
                    node.width - minRoomWidth - 1
                );

                nodes.push(...splitNodeVertical(node, cut));
            } else {
                const cut = randomInt(
                    minRoomHeight + 1,
                    node.height - minRoomHeight - 1
                );

                nodes.push(...splitNodeHorizontal(node, cut));
            }

            node.isLeaf = false;
        }

        graph.forEach((node) => {
            if (node.parentId === null) {
                return;
            }

            if (node.isLeaf) {
                const room = tiles.createRoom(
                    node.offsetX + 1,
                    node.offsetY + 1,
                    node.width - 1,
                    node.height - 1
                );

                room.includeWalls = true;

                for (let i = 0; i < node.width; i++) {
                    tiles.setTileType(
                        node.offsetX + i,
                        node.offsetY,
                        TILE_TYPE_WALL
                    );
                }

                for (let j = 0; j < node.height; j++) {
                    tiles.setTileType(
                        node.offsetX,
                        node.offsetY + j,
                        TILE_TYPE_WALL
                    );
                }
                return;
            }
        });

        graph.forEach((node) => {
            if (node.parentId === null) {
                return;
            }

            const sibling = graph.find((n) => n.id === node.siblingId);

            let doorCandidates = [];
            let hasSib = false;

            if (sibling.offsetX < node.offsetX) {
                hasSib = true;
                for (let i = 1; i < node.height; i++) {
                    const x = node.offsetX;
                    const y = node.offsetY + i;
                    const tile = tiles.getTile(x, y);

                    if (
                        tiles.tileTypeMatches(x - 1, y, TILE_TYPE_FLOOR) &&
                        tiles.tileTypeMatches(x + 1, y, TILE_TYPE_FLOOR)
                    ) {
                        doorCandidates.push(tile);
                    }
                }
            } else if (sibling.offsetY < node.offsetY) {
                hasSib = true;
                for (let i = 1; i < node.width; i++) {
                    const x = node.offsetX + i;
                    const y = node.offsetY;
                    const tile = tiles.getTile(x, y);

                    if (
                        tiles.tileTypeMatches(x, y - 1, TILE_TYPE_FLOOR) &&
                        tiles.tileTypeMatches(x, y + 1, TILE_TYPE_FLOOR)
                    ) {
                        doorCandidates.push(tile);
                    }
                }
            }

            const door = pickRandom(doorCandidates);

            if (hasSib && !door) {
                console.warn(
                    'cannot make door!?',
                    node,
                    node.width,
                    node.height
                );
            }

            if (door) {
                const room = tiles.getRoomForTile(door.x, door.y);

                if (room) {
                    room.addExit(door.x, door.y);
                }

                tiles.setTileType(door.x, door.y, TILE_TYPE_FLOOR);
            }
        });

        const cost = (a, b) => {
            if (tiles.tileTypeMatches(b.x, b.y, TILE_TYPE_FLOOR)) {
                return diagonalDistance(a, b);
            }

            return Infinity;
        };

        const tryAddLoop = (a, b) => {
            if (a.isType(TILE_TYPE_FLOOR) && b.isType(TILE_TYPE_FLOOR)) {
                const start = {
                    x: b.x,
                    y: b.y,
                };
                const goal = {
                    x: a.x,
                    y: a.y,
                };
                const path = computeAStar({
                    start,
                    goal,
                    cost
                });

                if (path.success && path.cost >= loopiness) {
                    return true;
                }
            }

            return false;
        };

        tiles.data
            .filter((tile) => tile.isType(TILE_TYPE_WALL))
            .forEach((tile) => {
                const north = tiles.getTile(tile.x, tile.y - 1);
                const south = tiles.getTile(tile.x, tile.y + 1);

                if (tryAddLoop(north, south)) {
                    tiles.setTileType(tile.x, tile.y, TILE_TYPE_FLOOR)
                    return;
                }

                const east = tiles.getTile(tile.x - 1, tile.y);
                const west = tiles.getTile(tile.x + 1, tile.y);

                if (tryAddLoop(east, west)) {
                    tiles.setTileType(tile.x, tile.y, TILE_TYPE_FLOOR)
                    return;
                }
            });

        digExits(tiles, exits);

        return tiles;
    }
}
