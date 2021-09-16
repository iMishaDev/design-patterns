import { UIControl } from "./UIControl.js";

export class TextBox extends UIControl {
    #content; 

    setContent(content){
        this.#content = content;
        this.notifyEventHandlers();
    }

    getContent(){
        return this.#content;
    }
}