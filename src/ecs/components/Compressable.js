import { Component } from 'geotic';

export class Compressable extends Component {
    static properties = {
        compressedCh: 'h',
        massRequirement: 60,
        isCompressed: false,
    };
}
