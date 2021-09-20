export class WebServer {
    #handler

    constructor(handler){
        this.#handler = handler;
    }

    handle(request){
        this.#handler.handle(request)
    }
}