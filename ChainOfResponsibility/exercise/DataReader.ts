export abstract class DataReader {
    #next;
    constructor(next){
        this.#next = next;
    }

    read(fileName){
        if(fileName.endsWith(this.getExtension())){
            this.doRead(fileName);
            return;
        }


        if(this.#next)
            this.#next.read(fileName);
            
        
        else throw Error('extension not supported')

    }
    
    
    abstract doRead(fileName);
    abstract getExtension();
}