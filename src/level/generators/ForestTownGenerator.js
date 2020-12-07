import { game } from '../../core/Game';
import { computeAStar } from '../../utils/AStar';
import { diagonalDistance } from '../../utils/diagonalDistance';
import { pickRandom } from '../../utils/rand';
import { digExits } from '../LevelConnections';
import { ScatteredScheme } from '../schemes/ScatteredScheme';
import {
    getThemePopulator,
    TILE_THEME_CABIN,
    TILE_THEME_FOREST,
} from '../themes/TileTheme';
import { TILE_TYPE_WALL } from '../TileData';
import { addBorder } from './GeneratorUtils';
import SectorGenerator from './SectorGenerator';

const isTopLeftCorner = (t, room) => t.x === room.left && t.y === room.top;
const isBottomLeftCorner = (t, room) =>
    t.x === room.left && t.y === room.bottom - 1;
const isBottomRightCorner = (t, room) =>
    t.x === room.right - 1 && t.y === room.bottom - 1;
const isTopRightCorner = (t, room) =>
    t.x === room.right - 1 && t.y === room.top;

export class ForestTownGenerator extends SectorGenerator {
    static generate(settings) {
        const tiles = ScatteredScheme.generate({
            width: settings.width,
            height: settings.height,
            exits: settings.exits,
        });

        tiles.setTheme(TILE_THEME_CABIN);

        const addDoor = (room) => {
            const edges = room.borderTiles.filter(
                (t) =>
                    !(
                        isTopLeftCorner(t, room) ||
                        isBottomLeftCorner(t, room) ||
                        isBottomRightCorner(t, room) ||
                        isTopRightCorner(t, room)
                    )
            );

            const door = pickRandom(edges);

            if (door) {
                room.addExit(door.x, door.y);
            }
        };

        tiles.rooms.forEach(addDoor);

        tiles.getUnassignedTiles().forEach((tile) => {
            tile.theme = TILE_THEME_FOREST;
        });

        addBorder(tiles);

        digExits(tiles, settings.exits);

        return tiles;
    }

    static populate(settings, tiles) {
        tiles.rooms.forEach((room) => {
            const theme = getThemePopulator(room.theme);

            theme.populateRoom(room);
        });

        const doors = tiles.rooms.map((room) => room.exits).flat();
        const walkways = new Set();

        const populatePath = (result) => {
            if (!result.success) {
                return;
            }

            result.path.forEach((segment) => {
                const entities = game.map.getEntitiesAt(segment.x, segment.y);

                if (entities.length > 0) {
                    return;
                }

                const walkway = game.ecs.createPrefab('DirtPathway');

                walkway.position.setPos(segment.x, segment.y);
                walkways.add(`${segment.x},${segment.y}`);
            });
        };

        const generatePath = (start, end) => {
            const path = computeAStar({
                start: {
                    x: start.x,
                    y: start.y,
                },
                goal: {
                    x: end.x,
                    y: end.y,
                },
                cost: (a, b) => {
                    if (tiles.tileTypeMatches(b.x, b.y, TILE_TYPE_WALL)) {
                        return Infinity;
                    }

                    const neighbors = tiles.getNeighbors(b.x, b.y);
                    const walls = neighbors.filter((n) =>
                        n.isType(TILE_TYPE_WALL)
                    );

                    if (walls.length > 0) {
                        return walls.length * 2;
                    }

                    if (walkways.has(`${b.x},${b.y}`)) {
                        return 0.1;
                    }

                    return diagonalDistance(a, b) * 2;
                },
            });

            populatePath(path);
        };

        doors.forEach((doorA) => {
            settings.exits.forEach((exit) => {
                generatePath(doorA, exit);
            });
            doors.forEach((doorB) => {
                if (doorA === doorB) {
                    return;
                }

                generatePath(doorA, doorB);
            });
        });

        tiles.getUnassignedTiles().forEach((tile) => {
            const theme = getThemePopulator(tile.theme);

            theme.populateTile(tile);
        });
    }
}
