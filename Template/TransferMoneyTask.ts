import { Task } from "./Task.js";

export class TransferMoneyTask extends Task {
    protected doExecute() {
        console.log('transfer money')
    }
}