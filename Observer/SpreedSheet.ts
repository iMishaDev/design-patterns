import { Observer } from "./Observer.js";

export class SpreedSheet implements Observer {
    update() {
        console.log('spreed sheet updated ')
    }
}