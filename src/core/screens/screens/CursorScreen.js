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
    directionDelta,
} from '../../../enums/Directions';
import { bresenhamLine } from '../../../utils/BresenhamLine';
import { FactionMember } from '../../../ecs/components';
import { drawTags } from '../../../utils/UITags';
import { simpleCursorRenderer } from '../../../utils/cursor/SimpleCursorRenderer';

const NOOP = () => {};

export default class CursorScreen extends Screen {
    x = 0;
    y = 0;
    maxDistance = Infinity;
    start = {};
    drawTags = false;
    drawFaction = false;
    drawTemperature = false;
    onResult = NOOP;
    onCancel = NOOP;

    onEnter(ctx) {
        this.game.renderer.clear();
        this.game.FOVSystem.computeFOV();

        this.start = ctx.start || this.game.player.position;
        this.drawTags = ctx.drawTags || false;
        this.drawFaction = ctx.drawFaction || false;
        this.drawTemperature = ctx.drawTemperature || false;
        this.onResult = ctx.onResult || NOOP;
        this.onCancel = ctx.onCancel || NOOP;
        this.renderer = ctx.renderer || simpleCursorRenderer();
        this.maxDistance = ctx.maxDistance || Infinity;

        this.x = this.start.x;
        this.y = this.start.y;
    }

    onDirectionInput(direction) {
        const delta = directionDelta(direction);

        if (Math.abs(this.start.x - (this.x + delta.x)) <= this.maxDistance) {
            this.x += delta.x;
        }
        if (Math.abs(this.start.y - (this.y + delta.y)) <= this.maxDistance) {
            this.y += delta.y;
        }
    }

    onConfirm() {
        const opts = this.getOpts();

        if (this.renderer.isValid(opts)) {
            this.onResult(opts);
        }
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

    getOpts() {
        return {
            start: {
                x: this.start.x,
                y: this.start.y,
            },
            position: {
                x: this.x,
                y: this.y,
            },
            x: this.x,
            y: this.y,
            screen: this.game.camera.worldToScreen(this.x, this.y),
            line: bresenhamLine(this.start.x, this.start.y, this.x, this.y),
        };
    }

    onUpdate(dt) {
        this.handleInput();
        this.game.updateAdventureSystems(dt);

        this.renderer.render(this.getOpts());

        if (this.drawTags) {
            drawTags(this.x, this.y);
        }

        if (this.drawFaction) {
            const target = this.game.map
                .getEntitiesAt(this.x, this.y)
                .filter((e) => e.isVisible && e.factionMember)
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
        }

        if (this.drawTemperature) {
            const tmpC = this.game.temperature.getTemperature(this.x, this.y);
            const tmpF = (tmpC * 9) / 5 + 32;

            this.game.renderer.drawText(
                this.game.camera.width - 12,
                this.game.camera.height - 1,
                `${Math.round(tmpF)}°F (${Math.round(tmpC)}°C)`
            );
        }
    }
}
