import { INPUT_DOMAIN_DEFAULT } from './InputDomainType';
import commands from './commands';
import Manager from '../Manager';

export default class CommandManager extends Manager {
    _commands = {};
    _domainStack = [INPUT_DOMAIN_DEFAULT];
    _inputStack = [];

    constructor(game) {
        super(game);
        commands.forEach((cmd) => this.registerCommand(cmd));
    }

    onInputEvent(evt) {
        this._inputStack.push(evt);
    }

    getNextCommand() {
        const evt = this._inputStack.shift();

        if (evt) {
            return this.getCommandForInputEvent(evt);
        }
    }

    pushDomain(domain) {
        this._domainStack.push(domain);
    }

    popDomain(domain) {
        const index = this._domainStack.lastIndexOf(domain);

        if (index > -1) {
            this._domainStack.splice(index, 1);
        }
    }

    getDomainCommands(domain) {
        return this._commands[domain] || [];
    }

    getCommandForInputEvent(evt) {
        for (let i = this._domainStack.length - 1; i >= 0; i--) {
            const domain = this._domainStack[i];
            const cmds = this.getDomainCommands(domain);
            const cmd = cmds.find((cmd) => cmd.matches(evt));

            if (cmd) {
                return cmd;
            }
        }
    }

    registerCommand(command) {
        if (!this._commands[command.domain]) {
            this._commands[command.domain] = [];
        }

        this._commands[command.domain].push(command);
    }
}
