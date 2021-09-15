import { UIControl } from "./UIControl.js";

export class Button extends UIControl {
    #isEnabled;

    setIsEnabled(isEnabled){
        this.#isEnabled = isEnabled;
    }

    getIsEnabled(){
        return this.#isEnabled;
    }
}