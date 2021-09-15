import { UIControl } from "./UIControl.js";

export class TextBox extends UIControl {
    #content; 

    setContent(content){
        this.#content = content;
    }

    getContent(){
        return this.#content;
    }
}