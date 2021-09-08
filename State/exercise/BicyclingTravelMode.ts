export class BicyclingTravelMode {
    readonly #eta;

    constructor(){
        this.#eta = 2;
    }

    getEta(){
        console.log("Calculating ETA (bicycling)");
        return this.#eta;
    }


    getDirection() {
        console.log("Calculating Direction (bicycling)");
        return this.#eta;
    }
}