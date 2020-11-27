import { digConnections } from '../LevelConnections';
import TileContainer from '../TileContainer';
import TileGenerator from '../TileGenerator';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import { pickRandom, randomInt } from '../../utils/rand';
import { SquareGenerator } from './SquareGenerator';

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
        height: node.height
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
        height: node.height - cut
    };

    return [top, bottom];
};

export class DenseCastleGenerator extends TileGenerator {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const connections = settings.connections;

        const minRoomWidth = settings.minRoomWidth || 4;
        const minRoomHeight = settings.minRoomWidth || 4;

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

        const nodes = [{
            isLeaf: true,
            parentId: null,
            siblingId: null,
            id: createNodeId(),
            offsetX: 0,
            offsetY: 0,
            height: height - 1,
            width: width - 1
        }];

        const graph = [];

        let ignoreSplitPercent = 0.1;

        while (nodes.length > 0) {
            const node = nodes.pop();
            graph.push(node);

            const ignoreSplit = Math.random() < ignoreSplitPercent

            if (ignoreSplit) {
                continue
            }

            const directions = [];

            if ((node.width - minRoomWidth - 1) > minRoomWidth) {
                directions.push(VERTICAL);
            }

            if ((node.height - minRoomHeight - 1) > minRoomHeight) {
                directions.push(HORIZONTAL);
            }

            if (directions.length <= 0) {
                continue;
            }

            const direction = pickRandom(directions);

            if (direction === VERTICAL) {
                const cut = randomInt(minRoomWidth + 1, node.width - minRoomWidth - 1);

                nodes.push(...splitNodeVertical(node, cut));
            } else {
                const cut = randomInt(minRoomHeight + 1, node.height - minRoomHeight - 1);

                nodes.push(...splitNodeHorizontal(node, cut));
            }

            node.isLeaf = false;
        }

        console.log(graph);

        graph.forEach((node) => {
            if (node.parentId === null) {
                console.log('skipping root node', node);
                return;
            }

            if (node.isLeaf) {
                for (let i = 0; i < node.width; i++) {
                    tiles.setTileType(node.offsetX + i, node.offsetY, TILE_TYPE_WALL);
                }

                for (let j = 0; j < node.height; j++) {
                    tiles.setTileType(node.offsetX, node.offsetY + j, TILE_TYPE_WALL);
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
                console.log('sibling is LEFT!');
                hasSib = true;
                for (let i = 1; i < node.height; i++) {
                    const x = node.offsetX;
                    const y = node.offsetY + i;
                    const tile = tiles.getTile(x, y);

                    // check tiles before and after are clear?
                    if (
                        tiles.tileTypeMatches(x - 1, y, TILE_TYPE_FLOOR) && tiles.tileTypeMatches(x + 1, y, TILE_TYPE_FLOOR)
                    ) {
                        doorCandidates.push(tile);
                    }
                }
            } else if (sibling.offsetY < node.offsetY) {
                console.log('sibling is TOP!');
                hasSib = true;
                for (let i = 1; i < node.width; i++) {
                    const x = node.offsetX + i;
                    const y = node.offsetY;
                    const tile = tiles.getTile(x, y);

                    // check tiles before and after are clear?
                    if (
                        tiles.tileTypeMatches(x, y - 1, TILE_TYPE_FLOOR) && tiles.tileTypeMatches(x, y + 1, TILE_TYPE_FLOOR)
                    ) {
                        doorCandidates.push(tile);
                    }

                    doorCandidates.push(tile);
                }
            }

            const door = pickRandom(doorCandidates);

            if (hasSib && !door) {
                console.warn('cannot make door!?', node, node.width, node.height);
            }

            if (door) {
                tiles.setTileType(door.x, door.y, TILE_TYPE_FLOOR);
            }
        });

        digConnections(tiles, connections);

        return tiles;
    }
};
