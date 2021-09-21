import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";

export interface AudioFilter {
    apply(formatSegment: FormatSegment);
    apply(factSegment: FactSegment);
}