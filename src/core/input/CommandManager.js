import { INPUT_DOMAIN_DEFAULT } from './InputDomainType';
import commands from './commands';
import Manager from '../Manager';

export default class CommandManager extends Manager {
    #commands = {};
    #domainStack = [INPUT_DOMAIN_DEFAULT];

    constructor(game) {
        super(game);
        commands.forEach((cmd) => this.registerCommand(cmd));
    }

    onInputEvent(evt) {
        const cmd = this.getCommandForInputEvent(evt);

        if (cmd) {
            this.game.screenManager.onInputCommand(cmd);
        }
    }

    pushDomain(domain) {
        this.#domainStack.push(domain);
    }

    popDomain(domain) {
        const index = this.#domainStack.lastIndexOf(domain);

        if (index > -1) {
            this.#domainStack.splice(index, 1);
        }
    }

    getDomainCommands(domain) {
        return this.#commands[domain] || [];
    }

    getCommandForInputEvent(evt) {
        for (let i = this.#domainStack.length - 1; i >= 0; i--) {
            const domain = this.#domainStack[i];
            const cmds = this.getDomainCommands(domain);
            const cmd = cmds.find((cmd) => cmd.matches(evt));

            if (cmd) {
                return cmd;
            }
        }
    }

    registerCommand(command) {
        if (!this.#commands[command.domain]) {
            this.#commands[command.domain] = [];
        }

        this.#commands[command.domain].push(command);
    }
}
