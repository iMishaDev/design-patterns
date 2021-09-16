import { UIControl } from "./UIControl.js"; 
export class CheckBox extends UIControl {
    #isChecked = false;

    setChecked(isChecked){
        this.#isChecked = isChecked;
        this.notifyListeners();
    }

    isChecked(){
        return this.#isChecked;
    }
}