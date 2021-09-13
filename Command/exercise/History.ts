export class History {
    #commands;

    constructor(){
        this.#commands = [];
    }

    push(command){
        this.#commands.push(command);
    }
    
    pop(){
        return this.#commands.pop();
    }

    size(){
        return this.#commands.length
    }
}