import { ProductCollection } from "./ProductCollection.js";


let products = new ProductCollection();
products.add('q');
products.add('a');
products.add('h');
products.add('k');

let iterator = products.createIterator();

while(iterator.hasNext()){
    console.log(iterator.current())
    iterator.next();
}