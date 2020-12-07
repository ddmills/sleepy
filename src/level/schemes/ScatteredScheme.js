import { randomInt } from '../../utils/rand';
import { digExits } from '../LevelConnections';
import TileContainer from '../TileContainer';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileScheme from '../TileScheme';

export class ScatteredScheme extends TileScheme {
    static generate(settings) {
        const attempt = settings.attempt || 1;
        const maxAttempts = settings.maxAttempts || 100;
        const width = settings.width;
        const height = settings.height;
        const padding = settings.padding || 3;
        const roomPadding = settings.roomPadding || 3;
        const minCount = settings.minCount || 5;
        const maxCount = settings.maxCount || 8;
        const minWidth = settings.minWidth || 6;
        const maxWidth = settings.maxWidth || 10;
        const minHeight = settings.minHeight || 6;
        const maxHeight = settings.maxHeight || 10;
        const exits = settings.exits || [];
        const tiles = new TileContainer(width, height);

        if (attempt > maxAttempts) {
            console.warn(
                `Failed to generate ScatteredScheme in ${maxAttempts} attempts`
            );

            return tiles;
        }

        const createBox = () => {
            const width = randomInt(minWidth, maxWidth);
            const height = randomInt(minHeight, maxHeight);

            return {
                x: randomInt(padding, settings.width - padding - width),
                y: randomInt(padding, settings.height - padding - height),
                width,
                height,
                get top() {
                    return this.y - roomPadding;
                },
                get bottom() {
                    return this.y + this.height + roomPadding;
                },
                get left() {
                    return this.x - roomPadding;
                },
                get right() {
                    return this.x + this.width + roomPadding;
                },
            };
        };

        const overlaps = (box) => {
            return tiles.rooms.some((room) => {
                return room.intersects(
                    box.left,
                    box.top,
                    box.right,
                    box.bottom
                );
            });
        };

        for (let i = 0; i < 100; i++) {
            const box = createBox();

            if (overlaps(box)) {
                continue;
            }

            for (let i = 0; i < box.width; i++) {
                for (let j = 0; j < box.height; j++) {
                    const point = {
                        x: box.x + i,
                        y: box.y + j,
                    };

                    if (
                        i === 0 ||
                        i === box.width - 1 ||
                        j === 0 ||
                        j === box.height - 1
                    ) {
                        tiles.setTileType(point.x, point.y, TILE_TYPE_WALL);
                    } else {
                        tiles.setTileType(point.x, point.y, TILE_TYPE_FLOOR);
                    }
                }
            }

            tiles.createRoom(box.x, box.y, box.width, box.height);

            if (tiles.rooms.length >= maxCount) {
                break;
            }
        }

        if (tiles.rooms.length < minCount) {
            console.warn('COULD NOT GET MINIMUM COUNT');
            return this.generate({
                ...settings,
                attempt: attempt + 1,
            });
        }

        digExits(tiles, exits);

        return tiles;
    }
}
