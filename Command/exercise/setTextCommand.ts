import { UnDoableCommand } from "./UnDoableCommand.js";

export class setTextCommand implements UnDoableCommand {
    #videoEditor;
    #history;
    #text;

    constructor(history, videoEditor){
        this.#history = history;
        this.#videoEditor = videoEditor;
    }


    unExecute() {
        this.#videoEditor.removeText();
    }


    execute() {
        this.#videoEditor.setText(this.#text);
    }

}