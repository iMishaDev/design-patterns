import { UnDoableCommand } from "./UnDoableCommand.js";

export abstract class AbstractUnDoableCommand implements UnDoableCommand {
    protected videoEditor;
    protected history;

    constructor(history, videoEditor){
        this.history = history;
        this.videoEditor = videoEditor;
    }

    execute(){
        this.doExecute();
        this.history.push(this);
    }

    protected abstract doExecute();


    unExecute() {
        
    }
}