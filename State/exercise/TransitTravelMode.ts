export class TransitTravelMode {
    readonly #eta;
    
    constructor(){
        this.#eta = 3;
    }


    getEta(){
        console.log("Calculating ETA (transit)");
        return this.#eta;
    }


    getDirection() {
        console.log("Calculating Direction (transit)");
        return this.#eta;
    }
}