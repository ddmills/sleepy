import { AREA_TYPE_WATER } from './AreaType';

export class EditorMapCell {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.type = data.type || AREA_TYPE_WATER;
    }

    serialize() {
        return {
            x: this.x,
            y: this.y,
            type: this.type,
        };
    }
}
