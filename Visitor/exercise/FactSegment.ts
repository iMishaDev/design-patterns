import { AudioFilter } from "./AudioFilter.js";
import { Segment } from "./Segment.js";

export class FactSegment extends Segment {
    applyFilter(obj: AudioFilter) {
        obj.apply(this);
    }
}