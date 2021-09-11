import { AuditTrail } from "./AuditTrail.js";

export abstract class Task {
    #auditor;
    

    constructor(auditor?){
        this.#auditor = auditor && auditor || new AuditTrail() ;
    }

    execute(){
        this.#auditor.record();
        console.log('auditing .....')

        this.doExecute();
    }

    protected abstract doExecute();
}
