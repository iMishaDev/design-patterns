import { Command } from "./Command.js";

export class Button {
    #label;
    #command; 

    constructor(label, command){
        this.#label = label;
        this.#command = command;
    }

    click() {
        this.#command.execute();
    }

    getLabel(){
        return this.#label;
    }
}