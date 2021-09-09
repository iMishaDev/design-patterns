import { Iterator } from "./Iterator";

export class ArrayIterator implements Iterator {
    #productsCollection;
    #index = 0;
    constructor(productsCollection){
        this.#productsCollection = productsCollection;
    }

    hasNext() {
        return this.#index < this.#productsCollection.products.length;
    }

    next() {
        this.#index++;
    }

    current() {
        return this.#productsCollection.products[this.#index];
    }

}