export class WalkingTravelMode {
    readonly #eta;
    
    constructor(){
        this.#eta = 4;
    }


    getEta(){
        console.log("Calculating ETA (walking)");
        return this.#eta;
    }


    getDirection() {
        console.log("Calculating Direction (walking)");
        return this.#eta;
    }
}