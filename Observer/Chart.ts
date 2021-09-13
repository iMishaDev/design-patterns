import { Observer } from "./Observer.js";

export class Chart implements Observer {
    update() {
        console.log('chart updated ')
    }
}