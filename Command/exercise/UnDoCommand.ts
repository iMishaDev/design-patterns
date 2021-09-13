import { Command } from "./Command.js";

export class UnDoCommand implements Command {

    #history;
    constructor(history){
        this.#history = history;
    }


    execute() {
        if(this.#history.size() > 0)
            this.#history.pop().unExecute();
    }

}