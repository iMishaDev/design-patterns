import { AudioFilter } from "./AudioFilter.js";
import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";

export class NormalizeFilter implements AudioFilter {
    apply(formatSegment: FormatSegment);
    apply(factSegment: FactSegment);
    apply(factSegment: any): any {
        console.log('apply normalize filter')
    }

}