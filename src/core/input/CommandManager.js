import { INPUT_DOMAIN_DEFAULT } from './InputDomainType';
import commands from './commands';

export default class CommandManager {
    #commands = {};
    #domainStack = [INPUT_DOMAIN_DEFAULT];

    constructor() {
        commands.forEach((cmd) => this.registerCommand(cmd));
    }

    onInputEvent(evt) {
        const cmd = this.getCommandForInputEvent(evt);

        if (cmd) {
            console.log(`CMD(${cmd.type}) ${cmd.name}`);
        }
    }

    pushDomain(domain) {
        this.#domainStack.push(domain);
    }

    popDomain() {
        return this.#domainStack.pop();
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
