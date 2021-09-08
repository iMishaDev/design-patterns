export class DirectionService {
    #travelMode;

    constructor(travelMode){
        this.#travelMode = travelMode;
    }

    getEta() {
        return this.#travelMode.getEta();
    }

    getDirection() {
        return this.#travelMode.getDirection();
    }

    getTravelMode() {
        return this.#travelMode;
    }

    setTravelMode(travelMode) {
        this.#travelMode = travelMode;
    }
}
