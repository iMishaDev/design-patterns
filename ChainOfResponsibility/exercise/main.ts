import { ExcelReader } from "./ExcelReader.js";
import { QuickBooksReader } from "./QuickBooksReader.js";
import { SpreadSheetReader } from "./SpreadSheetReader.js";

let excelReader = new ExcelReader(null);
let numbersReader = new SpreadSheetReader(excelReader);
let quickBooksReader = new QuickBooksReader(numbersReader);


quickBooksReader.read("data.qbw");
quickBooksReader.read("data.numbers");
quickBooksReader.read("data.xls");