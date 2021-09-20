import { Handler } from "./Handler.js";
export class Compressor extends Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        console.log('compressing');
        return false;
    }
}
