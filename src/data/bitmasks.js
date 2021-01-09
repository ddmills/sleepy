export const BITMASK_WALL = 'BITMASK_WALL';


const map = {
    BITMASK_WALL: (value) => {
        switch (value) {
            case 2:
            case 64:
            case 66:
            case 67:
            case 70:
            case 71:
            case 98:
            case 102:
            case 194:
            case 195:
            case 226:
                return '║';
            case 10:
                return '╝';
            case 18:
                return '╚';
            case 72:
                return '╗';
            case 80:
                return '╔';
            case 26:
            case 58:
            case 154:
                return '╩';
            case 82:
            case 83:
            case 114:
                return '╠';
            case 74:
            case 78:
            case 202:
                return '╣';
            case 88:
            case 92:
                return '╦';
            case 90:
                return '╬';
            default:
                return '═';
        };
    }
};


export const getMaskGlyph = (key, mask) => map[key](mask);
