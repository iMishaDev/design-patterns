import { Subject } from "./Subject.js";

export class TBStock extends Subject {
    #symbol;
    #price;

    constructor(symbol,  price) {
        super();
        this.#symbol = symbol;
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        this.#price = price;
        this.notifyObservers();
    }
    
    details(){
        return {
            'symbol': this.#symbol,
            'price' : this.#price
        }
    }
}