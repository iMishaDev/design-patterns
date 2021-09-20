import { DataReader } from "./DataReader.js";
export class SpreadSheetReader extends DataReader {
    constructor(next) {
        super(next);
    }
    getExtension() {
        return '.numbers';
    }
    doRead() {
        console.log('spreadsheet reading');
    }
}
