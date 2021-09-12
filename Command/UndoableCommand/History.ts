export class History {
    #history
    constructor(){
        this.#history = [];
    }

    push(command){
        this.#history.push(command)
    }

    pop(){
        return this.#history.pop();
    }

    size(){
        return this.#history.length;
    }
}