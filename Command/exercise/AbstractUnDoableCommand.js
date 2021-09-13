export class AbstractUnDoableCommand {
    constructor(history, videoEditor) {
        this.history = history;
        this.videoEditor = videoEditor;
    }
    execute() {
        this.doExecute();
        this.history.push(this);
    }
    unExecute() {
    }
}
