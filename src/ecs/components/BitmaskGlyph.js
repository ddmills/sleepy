import { Component } from 'geotic';
import { BITMASK_WALL } from '../../data/bitmasks';

export class BitmaskGlyph extends Component {
    static properties = {
        key: BITMASK_WALL,
        updateGlyph: true,
        value: 0,
    };
}
