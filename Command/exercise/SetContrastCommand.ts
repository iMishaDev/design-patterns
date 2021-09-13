import { AbstractUnDoableCommand } from "./AbstractUnDoableCommand.js";

export class SetContrastCommand extends AbstractUnDoableCommand {
    #contrast;
    #prevContrast;

    constructor(contrast, history, videoEditor){
        super(history, videoEditor);

        this.#prevContrast = videoEditor.getContrast();
        this.#contrast = contrast;
    }

    protected doExecute() {
        this.videoEditor.setContrast(this.#contrast);
    }


    unExecute() {
        this.videoEditor.setContrast(this.#prevContrast);
    }

}