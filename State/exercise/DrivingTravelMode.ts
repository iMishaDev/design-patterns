export class DrivingTravelMode {
    readonly #eta;
    
    constructor(){
        this.#eta = 1;
    }

    getEta(){
        console.log("Calculating ETA (driving)");
        return this.#eta;
    }


    getDirection() {
        console.log("Calculating Direction (driving)");
        return this.#eta;
    }
}