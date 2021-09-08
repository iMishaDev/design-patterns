import { Editor } from './Editor.js';
import { History } from './History.js';

let editor = new Editor('Hi');
let history = new History();

editor.setContent('hello');
editor.setContent('#%#klkl');
history.push(editor.createState());

editor.setContent('hello world!');
history.push(editor.createState());


editor.setContent('hello world!!');
console.log(editor.getContent());

editor.restore(history.pop());
console.log(editor.getContent());

editor.restore(history.pop());
console.log(editor.getContent());
