import { UnDoableCommand } from "./UnDoableCommand.js";

export class BoldCommand implements UnDoableCommand {

    #prevContent;
    #htmlDocument;
    #history;

    constructor(document, history){
        this.#htmlDocument = document;
        this.#history = history;
    }


    unExecute() {
        this.#htmlDocument.setContent(this.#prevContent);
        
    }
    execute() {
        this.#prevContent = this.#htmlDocument.getContent();
        this.#htmlDocument.makeBold();
        this.#history.push(this);
    }

}