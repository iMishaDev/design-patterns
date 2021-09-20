import { DataReader } from "./DataReader.js";

export class ExcelReader extends DataReader {

    constructor(next){
        super(next)
    }

    getExtension(){
        return '.xls';
    }

    doRead() {
        console.log('excel reading')
    }
}