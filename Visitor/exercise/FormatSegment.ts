import { AudioFilter } from "./AudioFilter.js";
import { Segment } from "./Segment.js";

export class FormatSegment extends Segment {
    applyFilter(obj: AudioFilter) {
        obj.apply(this);
    }
}