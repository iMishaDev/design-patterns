export abstract class Handler {
    #next;

    constructor(next){
        this.#next = next;
    }

    handle(request){
        if(this.doHandle(request))
            return;
        
        if(this.#next){
            this.#next.handle(request);
        }
    }

    abstract doHandle(request);
}