import { Component } from 'geotic';
import { MapLayer } from './MapLayer';

export class Map extends Component {
    static properties = {
        name: '',
        width: 32,
        height: 32,
    };

    get map() {
        return this.mapEntity.map;
    }

    idx(x, y) {
        return (y * this.width) + x;
    }

    coord(idx) {
        return (idx % this.width, idx / this.width);
    }

    getLayer(name) {
        return this.entity.get(MapLayer, name);
    }
}
