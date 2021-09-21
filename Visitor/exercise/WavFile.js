var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WavFile_segments;
import { FactSegment } from "./FactSegment.js";
import { FormatSegment } from "./FormatSegment.js";
export class WavFile {
    constructor() {
        _WavFile_segments.set(this, []);
    }
    static read(fileName) {
        // Simulate reading a wav file and building the segments
        var wavFile = new WavFile();
        __classPrivateFieldGet(wavFile, _WavFile_segments, "f").push(new FormatSegment());
        __classPrivateFieldGet(wavFile, _WavFile_segments, "f").push(new FactSegment());
        __classPrivateFieldGet(wavFile, _WavFile_segments, "f").push(new FactSegment());
        __classPrivateFieldGet(wavFile, _WavFile_segments, "f").push(new FactSegment());
        return wavFile;
    }
    applyFilter(filter) {
        for (const segment of __classPrivateFieldGet(this, _WavFile_segments, "f")) {
            segment.applyFilter(filter);
        }
    }
}
_WavFile_segments = new WeakMap();
