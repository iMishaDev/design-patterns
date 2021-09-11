import { Task } from "./Task.js";
export class GenerateReportTask extends Task {
    doExecute() {
        console.log('generate report');
    }
}
