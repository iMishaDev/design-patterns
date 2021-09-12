import { CompositeCommand } from "./CompositeCommand.js";
import { FilterCommand } from "./FilterCommand.js";
import { WindowResizeCommand } from "./WindowResizeCommand.js";


let resize = new WindowResizeCommand();
let filter = new FilterCommand();
let command = new CompositeCommand([resize, filter]);

command.execute();