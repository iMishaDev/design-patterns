
export class History {
    #states; 

    constructor(){
        this.#states = [];
    }

    push(state){
        this.#states.push(state);
    }

    pop(){
        return this.#states.pop();
    }
}