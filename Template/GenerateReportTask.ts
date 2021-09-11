import { Task } from "./Task.js";

export class GenerateReportTask extends Task {
    protected doExecute() {
        console.log('generate report')
    }
}