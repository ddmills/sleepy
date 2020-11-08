import { Component } from 'geotic';

export class MapLayer extends Component {
    static properties = {
        mapEntity: '<Entity>',
        name: '',
        content: '<EntityArray>',
    };

    get map() {
        return this.mapEntity.map;
    }

    getByIndex(idx) {
        return content[idx];
    }

    get(x, y) {

    }
}
