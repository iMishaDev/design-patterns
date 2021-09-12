import { Command } from "./Command.js";

export interface UnDoableCommand extends Command {
    unExecute();
}