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
    INPUT_CMD_INTERACT,
    INPUT_CMD_PICK_UP,
    INPUT_CMD_INVENTORY,
    INPUT_CMD_SELECT_NW,
    INPUT_CMD_SELECT_N,
    INPUT_CMD_SELECT_NE,
    INPUT_CMD_SELECT_W,
    INPUT_CMD_SELECT_E,
    INPUT_CMD_SELECT_SW,
    INPUT_CMD_SELECT_S,
    INPUT_CMD_SELECT_SE,
    INPUT_CMD_EQUIPMENT,
    INPUT_CMD_CHARACTER,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';
import {
    DIR_N,
    DIR_W,
    DIR_E,
    DIR_S,
    DIR_NW,
    DIR_SW,
    DIR_SE,
    DIR_NE,
    delta as directionDelta,
} from '../../../enums/Directions';
import {
    SCREEN_CURSOR,
    SCREEN_EQUIPMENT,
    SCREEN_INTERACT_MODAL,
    SCREEN_INVENTORY,
    SCREEN_CHARACTER,
    SCREEN_LIST_SELECT,
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
        const delta = directionDelta(dir);
        const playerPosition = this.game.player.position;
        const targetPosition = {
            x: playerPosition.x + delta.x,
            y: playerPosition.y + delta.y,
        };
        const entities = this.game.map.getEntitiesAt(
            targetPosition.x,
            targetPosition.y
        );

        const hostileEntities = entities.filter((e) =>
            this.game.factions.areEntitiesHostile(e, this.game.player.entity)
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

    onPickUpCommand() {
        const position = this.game.player.position;
        const entities = this.game.map.getEntitiesAt(position.x, position.y);

        const lootable = entities.find((entity) => entity.has(Loot));

        if (lootable) {
            lootable.fireEvent('try-pick-up', {
                interactor: this.game.player.entity,
            });
        } else {
            console.log('there is nothing here to pick up.');
        }
    }

    onInteract(x, y) {
        const entities = this.game.map
            .getEntitiesAt(x, y)
            .filter((e) => !e.isPlayer);

        const items = entities.filter((entity) => {
            const evt = entity.fireEvent('get-interactions', {
                interactor: this.game.player.entity,
                interactions: [],
            });

            return evt.data.interactions.length > 0;
        });

        if (items.length <= 0) {
            return;
        }

        if (items.length == 1) {
            this.game.screens.pushScreen(SCREEN_INTERACT_MODAL, {
                interactor: this.game.player.entity,
                interactable: items[0],
            });
            return;
        }

        game.screens.pushScreen(SCREEN_LIST_SELECT, {
            header: `Choose`,
            list: items,
            onGetRowName: (item) => item.moniker.display,
            onSelect: (item) => {
                this.game.screens.replaceScreen(SCREEN_INTERACT_MODAL, {
                    interactor: this.game.player.entity,
                    interactable: item,
                });
            },
        });
    }

    onInteractDirection(dir) {
        const delta = directionDelta(dir);
        const playerPosition = this.game.player.position;
        const targetPosition = {
            x: playerPosition.x + delta.x,
            y: playerPosition.y + delta.y,
        };

        this.onInteract(targetPosition.x, targetPosition.y);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.state.saveGame();
        }
        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.state.loadGame();
        }
        if (cmd.type === INPUT_CMD_LOOK) {
            game.screens.pushScreen(SCREEN_CURSOR, {
                drawTags: true,
                onResult: () => game.screens.popScreen(),
                onCancel: () => game.screens.popScreen(),
            });
        }
        if (cmd.type === INPUT_CMD_PICK_UP) {
            this.onPickUpCommand();
        }
        if (cmd.type === INPUT_CMD_INTERACT) {
            const pos = this.game.player.position;

            this.onInteract(pos.x, pos.y);
        }
        if (cmd.type === INPUT_CMD_INVENTORY) {
            this.game.screens.pushScreen(SCREEN_INVENTORY, {
                accessible: this.game.player.entity,
                accessor: this.game.player.entity,
            });
        }
        if (cmd.type === INPUT_CMD_EQUIPMENT) {
            this.game.screens.pushScreen(SCREEN_EQUIPMENT, {
                accessor: this.game.player.entity,
            });
        }
        if (cmd.type === INPUT_CMD_CHARACTER) {
            this.game.screens.pushScreen(SCREEN_CHARACTER, {
                character: this.game.player.entity,
            });
        }
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.setScreen(SCREEN_MAIN_MENU);
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
        if (cmd.type === INPUT_CMD_SELECT_NW) {
            this.onInteractDirection(DIR_NW);
        }
        if (cmd.type === INPUT_CMD_SELECT_N) {
            this.onInteractDirection(DIR_N);
        }
        if (cmd.type === INPUT_CMD_SELECT_NE) {
            this.onInteractDirection(DIR_NE);
        }
        if (cmd.type === INPUT_CMD_SELECT_W) {
            this.onInteractDirection(DIR_W);
        }
        if (cmd.type === INPUT_CMD_SELECT_E) {
            this.onInteractDirection(DIR_E);
        }
        if (cmd.type === INPUT_CMD_SELECT_SW) {
            this.onInteractDirection(DIR_SW);
        }
        if (cmd.type === INPUT_CMD_SELECT_S) {
            this.onInteractDirection(DIR_S);
        }
        if (cmd.type === INPUT_CMD_SELECT_SE) {
            this.onInteractDirection(DIR_SE);
        }
    }

    onUpdate(dt) {
        this.game.updateAdventureSystems(dt);
    }
}
