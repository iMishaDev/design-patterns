import { Segment } from "./Segment.js";
export class FormatSegment extends Segment {
    applyFilter(obj) {
        obj.apply(this);
    }
}
