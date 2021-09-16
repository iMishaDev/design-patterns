import { UIControl } from "./UIControl.js"; 
export class Button extends UIControl {
    #isEnabled = false;

    setIsEnabled(isEnabled){
        this.#isEnabled = isEnabled;
    }

    isEnabled(){
        return this.#isEnabled;
    }
}