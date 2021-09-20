import { Handler } from "./Handler.js";

export class Logger extends Handler {
    constructor(next){
        super(next);
    }


    doHandle(request) {
        console.log('logger')
        return false;
    }
}