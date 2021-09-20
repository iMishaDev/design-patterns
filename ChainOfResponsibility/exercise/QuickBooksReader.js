import { DataReader } from "./DataReader.js";
export class QuickBooksReader extends DataReader {
    constructor(next) {
        super(next);
    }
    getExtension() {
        return '.qbw';
    }
    doRead() {
        console.log('quick books reading');
    }
}
