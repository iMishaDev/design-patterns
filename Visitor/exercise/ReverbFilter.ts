import { AudioFilter } from "./AudioFilter.js";
import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";

export class ReverbFilter implements AudioFilter {
    apply(formatSegment: FormatSegment);
    apply(factSegment: FactSegment);
    apply(factSegment: any): any {
        console.log('apply reverb filter')
    }

}