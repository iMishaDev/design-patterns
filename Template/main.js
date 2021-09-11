import { GenerateReportTask } from "./GenerateReportTask.js";
import { TransferMoneyTask } from "./TransferMoneyTask.js";
let transferMoney = new TransferMoneyTask();
let generateReport = new GenerateReportTask();
transferMoney.execute();
generateReport.execute();
