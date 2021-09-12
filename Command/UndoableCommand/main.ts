import { BoldCommand } from "./BoldCommand.js";
import { History } from "./History.js";
import { HTMLDocument } from "./HTMLDocument.js";
import { UnDoCommand } from "./unDoCommand.js";

let history = new History();
let document = new HTMLDocument();
document.setContent('hello world');
let boldCommand = new BoldCommand(document, history);
boldCommand.execute();
console.log(document.getContent())

let undo = new UnDoCommand(history);
undo.execute();
console.log(document.getContent())
