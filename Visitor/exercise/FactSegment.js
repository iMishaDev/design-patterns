import { Segment } from "./Segment.js";
export class FactSegment extends Segment {
    applyFilter(obj) {
        obj.apply(this);
    }
}
