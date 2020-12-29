import Screen from './Screen';
import {
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_NE,
    INPUT_CMD_MOVE_W,
    INPUT_CMD_MOVE_E,
    INPUT_CMD_MOVE_SW,
    INPUT_CMD_MOVE_S,
    INPUT_CMD_MOVE_SE,
    INPUT_CMD_MOVE_NW,
    INPUT_CMD_CANCEL,
    INPUT_CMD_CONFIRM,
} from '../../input/InputCommandType';
import {
    DIR_N,
    DIR_W,
    DIR_E,
    DIR_S,
    DIR_NW,
    DIR_SW,
    DIR_SE,
    DIR_NE,
} from '../../../enums/Directions';
import { bresenhamLine } from '../../../utils/BresenhamLine';
import {
    CURSOR_SEGMENT_INTEREST,
    CURSOR_SEGMENT_INVALID,
    CURSOR_SEGMENT_NONE,
    CURSOR_SEGMENT_UNKNOWN,
    getCursorSegmentTypeColor,
    getCursorSegmentTypeGlyph,
} from '../../../enums/CursorSegments';
import { FactionMember } from '../../../ecs/components';
import { CURSOR_MODE_DEFAULT, CURSOR_MODE_LINE, CURSOR_MODE_TILE } from '../../../enums/CursorModes';

const NOOP = () => {};
const getDefaultSegmentTypes = () => CURSOR_SEGMENT_UNKNOWN;
const defaultIsValid = () => true;

export default class CursorScreen extends Screen {
    start = {};
    onResult = NOOP;
    onCancel = NOOP;
    getSegmentTypes = NOOP;
    mode = CURSOR_MODE_DEFAULT;

    get drawTags() {
        return this.mode === CURSOR_MODE_DEFAULT;
    }

    onEnter(ctx) {
        this.game.renderer.clear();
        this.game.FOVSystem.computeFOV();
        this.game.cursor.enable();
        this.start = ctx.start || this.game.player.position;
        this.onResult = ctx.onResult || NOOP;
        this.onCancel = ctx.onCancel || NOOP;
        this.isValid = ctx.isValid || defaultIsValid;
        this.getSegmentTypes = ctx.getSegmentTypes || getDefaultSegmentTypes;
        this.mode = ctx.mode || CURSOR_MODE_DEFAULT;
    }

    onLeave() {
        this.game.cursor.disable();
    }

    onDirectionInput(dir) {
        this.game.cursor.move(dir);
    }

    onConfirm() {
        this.onResult({
            start: this.start,
            position: {
                x: this.game.cursor.x,
                y: this.game.cursor.y,
            },
        });
    }

    onCancel() {
        this.onCancel();
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.onConfirm();
        }
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.onCancel();
        }
        if (cmd.type === INPUT_CMD_MOVE_NW) {
            this.onDirectionInput(DIR_NW);
        }
        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.onDirectionInput(DIR_N);
        }
        if (cmd.type === INPUT_CMD_MOVE_NE) {
            this.onDirectionInput(DIR_NE);
        }
        if (cmd.type === INPUT_CMD_MOVE_W) {
            this.onDirectionInput(DIR_W);
        }
        if (cmd.type === INPUT_CMD_MOVE_E) {
            this.onDirectionInput(DIR_E);
        }
        if (cmd.type === INPUT_CMD_MOVE_SW) {
            this.onDirectionInput(DIR_SW);
        }
        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.onDirectionInput(DIR_S);
        }
        if (cmd.type === INPUT_CMD_MOVE_SE) {
            this.onDirectionInput(DIR_SE);
        }
    }

    onUpdate(dt) {
        this.handleInput();
        this.game.updateAdventureSystems(dt);

        let cursorColor = getCursorSegmentTypeColor(CURSOR_SEGMENT_INTEREST);

        if (this.mode === CURSOR_MODE_LINE) {
            const line = bresenhamLine(
                this.start.x,
                this.start.y,
                this.game.cursor.x,
                this.game.cursor.y
            );

            const types = this.getSegmentTypes(line);

            line.forEach((segment, idx) => {
                const type = types[idx];

                if (type === CURSOR_SEGMENT_NONE || isNaN(type)) {
                    return;
                }

                const color = getCursorSegmentTypeColor(type);
                const glyph = getCursorSegmentTypeGlyph(type);

                const screen = this.game.camera.worldToScreen(
                    segment.x,
                    segment.y
                );
                this.game.renderer.draw(screen.x, screen.y, glyph, color);

                if (idx === line.length - 1) {
                    cursorColor = color;
                }
            });
        }

        if (this.drawTags) {
            this.game.cursor.drawTags();
        }

        const target = this.game.cursor
            .getEntities()
            .filter((e) => e.has(FactionMember))
            .pop();

        const player = this.game.player.entity;

        if (target) {
            const faction = target.factionMember.faction;
            const relation = this.game.factions.getEntityRelation(
                player,
                target
            );

            let disp = this.game.factions.getDisplay(relation);

            this.game.renderer.drawTextCenter(
                1,
                `${faction.display} Faction [${disp}]`
            );
        }

        const tmpC = this.game.temperature.getTemperature(
            this.game.cursor.x,
            this.game.cursor.y
        );

        const tmpF = (tmpC * 9) / 5 + 32;

        this.game.renderer.drawText(
            this.game.camera.width - 12,
            this.game.camera.height - 1,
            `${Math.round(tmpF)}°F (${Math.round(tmpC)}°C)`
        );

        if (this.isValid(this.game.cursor.x, this.game.cursor.y)) {
            cursorColor = getCursorSegmentTypeColor(CURSOR_SEGMENT_INTEREST);
        } else {
            cursorColor = getCursorSegmentTypeColor(CURSOR_SEGMENT_INVALID);
        }

        this.game.cursor.drawCursor(cursorColor);
    }
}
