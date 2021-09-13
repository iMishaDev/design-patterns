import { AbstractUnDoableCommand } from "./AbstractUnDoableCommand.js";

export class SetTextCommand extends AbstractUnDoableCommand {
    #text;

    constructor(text, history, videoEditor){
        super(history, videoEditor);

        this.#text = text;
    }

    protected doExecute() {
        this.videoEditor.setText(this.#text);
    }


    unExecute() {
        this.videoEditor.removeText();
    }

}