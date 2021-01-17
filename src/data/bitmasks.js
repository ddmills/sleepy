export const BITMASK_WALL = 'BITMASK_WALL';
// 1  2  4
// 8     16
// 32 64 128

const map = {
    BITMASK_WALL: (value) => {
        switch (value) {
            case 0:
            case 2:
            case 3:
            case 6:
            case 7:
            case 17:
            case 48:
                return '╜';
            case 8:
            case 9:
            case 12:
            case 40:
            case 41:
            case 136:
                return '╛';
            case 16:
            case 20:
            case 144:
            case 148:
                return '╒';
            case 1:
            case 64:
            case 66:
            case 67:
            case 68:
            case 70:
            case 71:
            case 96:
            case 98:
            case 99:
            case 102:
            case 192:
            case 194:
            case 195:
            case 198:
            case 226:
                return '║';
            case 10:
                return '╝';
            case 18:
                return '╚';
            case 72:
                return '╗';
            case 80:
            case 84:
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
        }
    },
};

export const getMaskGlyph = (key, mask) => map[key](mask);
