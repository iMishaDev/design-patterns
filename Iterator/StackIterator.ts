import { Iterator } from "./Iterator";

export class StackIterator  implements Iterator {
    #browseHistory;
    #index = 0; 

    constructor(browseHistory){
        this.#browseHistory = browseHistory;
    }

    hasNext() {
        return this.#index < this.#browseHistory.urls.length;
    }

    next() {
        this.#index ++;
    }

    current() {
        return this.#browseHistory.urls[this.#index];
    }
}