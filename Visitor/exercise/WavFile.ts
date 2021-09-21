import { AudioFilter } from "./AudioFilter.js";
import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";

export class WavFile {
    #segments = [];

    static read(fileName) {
        // Simulate reading a wav file and building the segments
        var wavFile = new WavFile();
        wavFile.#segments.push(new FormatSegment());
        wavFile.#segments.push(new FactSegment());
        wavFile.#segments.push(new FactSegment());
        wavFile.#segments.push(new FactSegment());

        return wavFile;
    }

    applyFilter(filter: AudioFilter){
        for(const segment of this.#segments){
            segment.applyFilter(filter)
        }
    }
}
