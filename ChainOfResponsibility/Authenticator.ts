import { Handler } from "./Handler.js";

export class Authenticator extends Handler {
    constructor(next){
        super(next);
    }
    doHandle(request) {
        let isValid = request.getUserName() === 'admin' && request.getPassword() === '1234';
        console.log('authentication')

        return !isValid;
    }

}