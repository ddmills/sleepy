export const CURSOR_SEGMENT_UNKNOWN = 0;
export const CURSOR_SEGMENT_INVALID = 1;
export const CURSOR_SEGMENT_NONE = 2;
export const CURSOR_SEGMENT_INTEREST = 3;

const colorMap = {
    [CURSOR_SEGMENT_UNKNOWN]: '#444',
    [CURSOR_SEGMENT_INVALID]: '#ce5454',
    [CURSOR_SEGMENT_INTEREST]: '#66a3dc',
};

const glyphMap = {
    [CURSOR_SEGMENT_UNKNOWN]: '·',
    [CURSOR_SEGMENT_INVALID]: '·',
    [CURSOR_SEGMENT_INTEREST]: '•',
};

export const getCursorSegmentTypeColor = (type) => colorMap[type];
export const getCursorSegmentTypeGlyph = (type) => glyphMap[type];
