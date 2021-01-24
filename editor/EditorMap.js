import Grid from '../src/utils/Grid'
import { EditorMapCell } from './EditorMapCell';

export class EditorMap {
    constructor(width, height) {
        this.grid = new Grid(width, height, (x, y) => {
            return new EditorMapCell({
                x,
                y
            });
        });
    }

    serialize() {
        return {};
    }
}
