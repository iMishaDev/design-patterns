import { TravelMode } from './TravelMode.js';


export class DirectionService {
    #travelMode;

    getEta() {
        if (this.#travelMode == TravelMode.DRIVING) {
            console.log("Calculating ETA (driving)");
            return 1;
        }
        else if (this.#travelMode == TravelMode.BICYCLING) {
            console.log("Calculating ETA (bicycling)");
            return 2;
        }
        else if (this.#travelMode == TravelMode.TRANSIT) {
            console.log("Calculating ETA (transit)");
            return 3;
        }
        else {
            console.log("Calculating ETA (walking)");
            return 4;
        }
    }

    getDirection() {
        if (this.#travelMode == TravelMode.DRIVING) {
            console.log("Calculating Direction (driving)");
            return 1;
        }
        else if (this.#travelMode == TravelMode.BICYCLING) {
            console.log("Calculating Direction (bicycling)");
            return 2;
        }
        else if (this.#travelMode == TravelMode.TRANSIT) {
            console.log("Calculating Direction (transit)");
            return 3;
        }
        else {
            console.log("Calculating Direction (walking)");
            return 4;
        }
    }

    getTravelMode() {
        return this.#travelMode;
    }

    setTravelMode(travelMode) {
        this.#travelMode = travelMode;
    }
}
