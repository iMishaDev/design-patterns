export abstract class  UIControl { 
    #eventHandlers = [];


    addEventHandler(eventHandler){
        this.#eventHandlers.push(eventHandler)
    }
    
    
    protected notifyEventHandlers(){
        for(const eventHandler of this.#eventHandlers){
            eventHandler();
        }
    }
}