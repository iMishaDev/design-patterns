import { DrivingTravelMode  } from './DrivingTravelMode.js';
import { BicyclingTravelMode  } from './BicyclingTravelMode.js';
import { TransitTravelMode } from './TransitTravelMode.js';
import { WalkingTravelMode } from './WalkingTravelMode.js';
import { DirectionService } from './DirectionService.js';


let drivingMode = new DrivingTravelMode();
let directionService = new DirectionService(drivingMode);

console.log('driving mode started ... ')
console.log(directionService.getEta());
console.log(directionService.getDirection());
console.log('driving mode ended ... ')

let bicyclingMode = new BicyclingTravelMode();
directionService.setTravelMode(bicyclingMode);

console.log('bicycling mode started ... ')
console.log(directionService.getEta());
console.log(directionService.getDirection());
console.log('bicycling mode ended ... ')

let transitMode = new TransitTravelMode();
directionService.setTravelMode(transitMode);
console.log('transit mode started ... ')
console.log(directionService.getEta());
console.log(directionService.getDirection());
console.log('transit mode ended ... ')

let walkingMode = new WalkingTravelMode();
directionService.setTravelMode(walkingMode);
console.log('walking mode started ... ')
console.log(directionService.getEta());
console.log(directionService.getDirection());
console.log('walking mode ended ... ')