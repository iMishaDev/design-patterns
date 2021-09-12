import { Command } from "../generics/Command.js";

export class WindowResizeCommand implements Command {
    execute() {
        console.log('apply window resize.')
    }
}