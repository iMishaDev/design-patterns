import { History } from "./History.js";
import { SetContrastCommand } from "./SetContrastCommand.js";
import { SetTextCommand } from "./setTextCommand.js";
import { UnDoCommand } from "./UnDoCommand.js";
import { VideoEditor } from "./VideoEditor.js";

let history = new History();
let videoEditor = new VideoEditor();

let setText = new SetTextCommand('Hi!', history, videoEditor);
let setContrast = new SetContrastCommand(0.3, history, videoEditor);
setText.execute();
setContrast.execute();
console.log(videoEditor.details())

let undo = new UnDoCommand(history);

undo.execute();

console.log(videoEditor.details())

undo.execute();
console.log(videoEditor.details())
