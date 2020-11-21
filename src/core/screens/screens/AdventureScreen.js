import Screen from './Screen';
import {
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_NE,
    INPUT_CMD_MOVE_W,
    INPUT_CMD_WAIT,
    INPUT_CMD_MOVE_E,
    INPUT_CMD_MOVE_SW,
    INPUT_CMD_MOVE_S,
    INPUT_CMD_MOVE_SE,
    INPUT_CMD_MOVE_NW,
    INPUT_CMD_CANCEL,
    INPUT_CMD_SAVE,
    INPUT_CMD_LOAD,
    INPUT_CMD_LOOK,
    INPUT_CMD_SCREEN_CAPTURE_START,
    INPUT_CMD_SCREEN_CAPTURE_END,
    INPUT_CMD_INTERACT,
    INPUT_CMD_PICKUP,
    INPUT_CMD_INVENTORY,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';
import {
    DIR_N,
    DIR_W,
    DIR_Z,
    DIR_E,
    DIR_S,
    DIR_NW,
    DIR_SW,
    DIR_SE,
    DIR_NE,
    delta as directionDelta,
} from '../../../enums/Directions';
import {
    SCREEN_INTERACT_MODAL,
    SCREEN_INVENTORY,
    SCREEN_MAIN_MENU,
} from '../ScreenType';
import { Door, Loot } from '../../../ecs/components';

export default class AdventureScreen extends Screen {
    onEnter() {
        this.game.renderer.clear();
        this.game.commands.pushDomain(INPUT_DOMAIN_ADVENTURE);
        this.game.FOVSystem.computeFOV();

        const position = this.game.player.position;

        this.game.camera.setFocus(position.x, position.y);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onDirectionInput(dir) {
        if (this.game.cursor.isEnabled) {
            this.game.cursor.move(dir);
        } else {
            const delta = directionDelta(dir);
            const playerPosition = this.game.player.position;
            const targetPosition = {
                x: playerPosition.x + delta.x,
                y: playerPosition.y + delta.y,
            };
            const entities = this.game.map.getEntitiesAt(targetPosition.x, targetPosition.y)

            const hostileEntities = entities.filter((e) =>
                    this.game.factions.areEntitiesHostile(
                        e,
                        this.game.player.entity
                    )
                );

            if (hostileEntities.length > 0) {
                this.game.player.melee(hostileEntities[0]);
            } else {
                const doorEntity = entities.find((e) => e.has(Door));

                if (doorEntity && !doorEntity.door.isOpen) {
                    doorEntity.fireEvent('try-open-door', {
                        interactor: this.game.player.entity,
                    });
                } else {
                    this.game.player.move(dir);
                }
            }
        }
    }

    onPickupCommand() {
        const position = this.game.player.position;
        const entities = this.game.map.getEntitiesAt(position.x, position.y);

        const lootable = entities.find((entity) => entity.has(Loot));

        if (lootable) {
            lootable.fireEvent('try-pickup', {
                interactor: this.game.player.entity,
            });
        } else {
            console.log('there is nothing here to interact with.');
        }
    }

    onInteract() {
        const position = this.game.player.position;
        const entities = this.game.map.getEntitiesAt(position.x, position.y)
            .filter((e) => !e.isPlayer);

        const item = entities.find((entity) => {
            const evt = entity.fireEvent('get-interactions', {
                interactor: this.game.player.entity,
                interactions: [],
            });
            return evt.data.interactions.length > 0;
        });

        if (item) {
            this.game.screens.pushScreen(SCREEN_INTERACT_MODAL, {
                interactor: this.game.player.entity,
                interactable: item,
            });
        }
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.state.saveGame();
        }
        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.state.loadGame();
        }
        if (cmd.type === INPUT_CMD_LOOK) {
            this.game.cursor.toggle();
        }
        if (cmd.type === INPUT_CMD_PICKUP) {
            this.onPickupCommand();
        }
        if (cmd.type === INPUT_CMD_INTERACT) {
            this.onInteract();
        }
        if (cmd.type === INPUT_CMD_INVENTORY) {
            this.game.screens.pushScreen(SCREEN_INVENTORY, {
                accessible: this.game.player.entity,
                accessor: this.game.player.entity,
            });
        }
        if (cmd.type === INPUT_CMD_CANCEL) {
            if (this.game.cursor.isEnabled) {
                this.game.cursor.disable();
            } else {
                this.game.screens.setScreen(SCREEN_MAIN_MENU);
            }
        }
        if (cmd.type === INPUT_CMD_SCREEN_CAPTURE_START) {
            this.game.screenCapture.startCapture();
        }
        if (cmd.type === INPUT_CMD_SCREEN_CAPTURE_END) {
            this.game.screenCapture.endCapture();
        }
        if (cmd.type === INPUT_CMD_WAIT) {
            this.game.player.wait();
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
        this.game.hungerSystem.update(dt);
        this.game.actionSystem.update(dt);
        this.game.movementSystem.update(dt);
        this.game.meleeSystem.update(dt);
        this.game.deathSystem.update(dt);
        this.game.FOVSystem.update(dt);
        this.game.renderSystem.update(dt);
        this.game.particles.update(dt);
        this.game.UISystem.update(dt);
        this.game.cursor.update(dt);
    }
}
