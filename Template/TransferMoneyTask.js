import { Task } from "./Task.js";
export class TransferMoneyTask extends Task {
    doExecute() {
        console.log('transfer money');
    }
}
