import { UIControl } from "./UIControl.js";

export class ListBox extends UIControl {
    #selection;

    getSelection(){
        return this.#selection;
    }

    setSelection(selection){
        this.#selection = selection;
        this.notifyEventHandlers();
    }
}