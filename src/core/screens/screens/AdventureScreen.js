import Screen from './Screen';
import { INPUT_CMD_MOVE_N, INPUT_CMD_MOVE_NE, INPUT_CMD_MOVE_W, INPUT_CMD_WAIT, INPUT_CMD_MOVE_E, INPUT_CMD_MOVE_SW, INPUT_CMD_MOVE_S, INPUT_CMD_MOVE_SE, INPUT_CMD_MOVE_NW } from '../../input/InputCommandType';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';
import { DIR_N, DIR_W, DIR_Z, DIR_E, DIR_S, DIR_NW, DIR_SW, DIR_SE, DIR_NE } from '../../../enums/Directions';
import { MoveCommand } from '../../../ecs/components';

export default class AdventureScreen extends Screen {
    onEnter() {
        console.log('onEnter Adventure');
        this.game.commandManager.pushDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onLeave() {
        console.log('onLeave Adventure');
        this.game.commandManager.pushDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onInputCommand(cmd) {
        const move = (entity, direction) => {
            if (entity.has(MoveCommand)) {
                entity.remove(MoveCommand);
            }

            entity.add(MoveCommand, {
                direction,
            });
        };

        const player = this.game.playerManager.entity;

        if (cmd.type === INPUT_CMD_WAIT) {
            // move(player, DIR_Z);
            player.fireEvent('energy-consumed', 1000);
        }

        if (cmd.type === INPUT_CMD_MOVE_NW) {
            move(player, DIR_NW);
        }
        if (cmd.type === INPUT_CMD_MOVE_N) {
            move(player, DIR_N);
        }
        if (cmd.type === INPUT_CMD_MOVE_NE) {
            move(player, DIR_NE);
        }
        if (cmd.type === INPUT_CMD_MOVE_W) {
            move(player, DIR_W);
        }

        if (cmd.type === INPUT_CMD_MOVE_E) {
            move(player, DIR_E);
        }
        if (cmd.type === INPUT_CMD_MOVE_SW) {
            move(player, DIR_SW);
        }
        if (cmd.type === INPUT_CMD_MOVE_S) {
            move(player, DIR_S);
        }
        if (cmd.type === INPUT_CMD_MOVE_SE) {
            move(player, DIR_SE);
        }
    }
}
