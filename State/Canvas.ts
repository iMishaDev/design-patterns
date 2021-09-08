
export class Canvas {
    #currentTool;

    mouseUp(){
        this.#currentTool.mouseUp();
    }

    mouseDown(){
        this.#currentTool.mouseDown();
    }

    getCurrentTool(){
        return this.#currentTool;
    }

    setCurrentTool(currentTool){
        this.#currentTool = currentTool;
    }
}