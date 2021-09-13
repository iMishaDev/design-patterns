import { Subject } from "./Subject.js";

export class DataSource extends Subject {
    #value; 


    setValue(value){
        this.#value = value;
        this.notifyObservers();
    }

    getValue(){
        return this.#value;
    }
}