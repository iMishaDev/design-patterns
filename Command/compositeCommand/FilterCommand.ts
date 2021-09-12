import { Command } from "../generics/Command.js";

export class FilterCommand implements Command {
    execute() {
        console.log('apply black and white filter.')
    }
}