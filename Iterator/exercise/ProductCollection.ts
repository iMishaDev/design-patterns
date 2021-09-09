
import { ArrayIterator } from './ArrayIterator.js';

export class ProductCollection {
    products = [];

    add(product) {
        this.products.push(product);
    }

    createIterator(){
        return new ArrayIterator(this);
    }
}