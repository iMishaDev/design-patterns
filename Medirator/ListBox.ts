import { UIControl } from "./UIControl.js";

export class ListBox extends UIControl {
    #selection;
    constructor(dialogBox){
        super(dialogBox);
    }

    getSelection(){
        return this.#selection;
    }

    setSelection(selection){
        this.#selection = selection;
        this.dialogBox.changed();
    }
}