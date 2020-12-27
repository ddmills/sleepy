import { game } from '../core/Game';
import {
    UI_GLYPH_BORDER_T,
    UI_GLYPH_BORDER_B,
    UI_GLYPH_BORDER_L,
    UI_GLYPH_BORDER_R,
    UI_GLYPH_BORDER_TL,
    UI_GLYPH_BORDER_TR,
    UI_GLYPH_BORDER_BL,
    UI_GLYPH_BORDER_BR,
    UI_GLYPH_BORDER_TERM_R,
    UI_GLYPH_BORDER_TERM_L,
} from '../enums/UIGlyphs';

export const UI_BORDER_FG1 = '#405362';
export const UI_BORDER_FG2 = '#979545';

export const drawUIBox = (x, y, width, height) => {
    game.renderer.clearArea(x, y, width + 1, height + 1);

    for (let i = x; i < x + width; i++) {
        game.renderer.drawUI(
            i,
            y,
            UI_GLYPH_BORDER_T,
            UI_BORDER_FG1,
            UI_BORDER_FG2
        );
        game.renderer.drawUI(
            i,
            y + height,
            UI_GLYPH_BORDER_B,
            UI_BORDER_FG1,
            UI_BORDER_FG2
        );
    }

    for (let i = y; i < y + height; i++) {
        game.renderer.drawUI(
            x,
            i,
            UI_GLYPH_BORDER_L,
            UI_BORDER_FG1,
            UI_BORDER_FG2
        );
        game.renderer.drawUI(
            x + width,
            i,
            UI_GLYPH_BORDER_R,
            UI_BORDER_FG1,
            UI_BORDER_FG2
        );
    }

    game.renderer.drawUI(
        x,
        y,
        UI_GLYPH_BORDER_TL,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );
    game.renderer.drawUI(
        x + width,
        y,
        UI_GLYPH_BORDER_TR,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );
    game.renderer.drawUI(
        x,
        y + height,
        UI_GLYPH_BORDER_BL,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );
    game.renderer.drawUI(
        x + width,
        y + height,
        UI_GLYPH_BORDER_BR,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );
};

export const drawUIWindow = (x, y, width, height, title, icon) => {
    drawUIBox(x, y, width, height);

    const titleText = icon ? ` ${title}` : title;
    const titleWidth = Math.ceil(game.renderer.computeTextWidth(titleText));

    const titleOffset = x + 2;
    const iconWidth = icon ? 1 : 0;

    game.renderer.drawUI(
        titleOffset - 1,
        y,
        UI_GLYPH_BORDER_TERM_R,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );
    game.renderer.drawUI(
        titleOffset + iconWidth + titleWidth,
        y,
        UI_GLYPH_BORDER_TERM_L,
        UI_BORDER_FG1,
        UI_BORDER_FG2
    );

    if (icon) {
        game.renderer.draw(
            titleOffset,
            y,
            icon.char,
            icon.primary,
            icon.secondary,
            icon.background
        );
    }

    game.renderer.drawText(titleOffset + iconWidth, y, titleText);
};
