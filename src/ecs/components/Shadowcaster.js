import { Component } from 'geotic';

export class Shadowcaster extends Component {
    static properties = {
        removeOnCompression: false
    };

    onCompressed() {
        if (this.removeOnCompression) {
            this.destroy();
        }
    }
}
