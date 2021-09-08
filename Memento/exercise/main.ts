import { Document } from './Document.js';
import { History } from './History.js';

let doc = new Document('where are we ?', 'font', 12);
let history = new History();

doc.setContent('hello, ');
doc.setContent('#%#klkl');
history.push(doc.createState());
console.log(doc.getDetails());

doc.setContent('hello, I am Mashael!');
doc.setFontName('another font name');
doc.setFontSize(14);
history.push(doc.createState());
console.log('\nchanges happened')
console.log(doc.getDetails());

console.log('\nchanges happened')
doc.setContent('hello..');
doc.setFontName('another font name 2');
doc.setFontSize(14);
console.log(doc.getDetails());

console.log('\nrollback changes')
doc.restore(history.pop());
console.log(doc.getDetails());

console.log('\nrollback changes')
doc.restore(history.pop());
console.log(doc.getDetails());

