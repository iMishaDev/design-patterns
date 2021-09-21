import { AudioFilter } from "./AudioFilter.js";
import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";

export class NoiseReductionFilter implements AudioFilter {
    apply(formatSegment: FormatSegment);
    apply(factSegment: FactSegment);
    apply(factSegment: any): any {
        console.log('apply noise reduction filter')
    }

}