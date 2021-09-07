export class EditorState {
    #content;

    constructor(content){
        this.#content = content;
    }

    getContent(){
        return this.#content;
    }
}