import { Editor } from './Editor.js';
import { History } from './History.js';

let editor = new Editor('where are we ?', 'Hi, where are we ?', 'Mashael', Date.now() );
let history = new History();

editor.setTitle('How are you ?');
editor.setContent('hello, ');
editor.setContent('#%#klkl');
history.push(editor.createState());
console.log(editor.getDetails());

editor.setContent('hello, I am Mashael!');
history.push(editor.createState());
console.log('\nchanges happened')
console.log(editor.getDetails());

console.log('\nchanges happened')
editor.setContent('hello, I am Mashael! How are you ?');
console.log(editor.getDetails());

console.log('\nrollback changes')
editor.restore(history.pop());
console.log(editor.getDetails());

console.log('\nrollback changes')
editor.restore(history.pop());
console.log(editor.getDetails());

