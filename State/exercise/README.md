## Exercise#2

In the Exercises project, look at the code in the state/DirectionService class.

This is the class that powers our mapping app. It provides two methods for calculating the estimated time of arrival (ETA) and the direction between two points.

Identify the problems in this implementation. Then, refactor the code to use the state pattern. What are the benefits of the new implementation?


```
package com.codewithmosh.state;

public class DirectionService {
    private TravelMode travelMode;

    public Object getEta() {
        if (travelMode == TravelMode.DRIVING) {
            System.out.println("Calculating ETA (driving)");
            return 1;
        }
        else if (travelMode == TravelMode.BICYCLING) {
            System.out.println("Calculating ETA (bicycling)");
            return 2;
        }
        else if (travelMode == TravelMode.TRANSIT) {
            System.out.println("Calculating ETA (transit)");
            return 3;
        }
        else {
            System.out.println("Calculating ETA (walking)");
            return 4;
        }
    }

    public Object getDirection() {
        if (travelMode == TravelMode.DRIVING) {
            System.out.println("Calculating Direction (driving)");
            return 1;
        }
        else if (travelMode == TravelMode.BICYCLING) {
            System.out.println("Calculating Direction (bicycling)");
            return 2;
        }
        else if (travelMode == TravelMode.TRANSIT) {
            System.out.println("Calculating Direction (transit)");
            return 3;
        }
        else {
            System.out.println("Calculating Direction (walking)");
            return 4;
        }
    }

    public TravelMode getTravelMode() {
        return travelMode;
    }

    public void setTravelMode(TravelMode travelMode) {
        this.travelMode = travelMode;
    }
}



package com.codewithmosh.state;

public enum TravelMode {
    DRIVING,
    BICYCLING,
    TRANSIT,
    WALKING
}

```