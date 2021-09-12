import { Command } from "../generics/Command.js";

export class CompositeCommand implements Command {
    #commands;

    constructor(commands=[]){
        this.#commands = commands;
    }

    execute() {
        for(const command of this.#commands){
            command.execute();
        }
    }

}