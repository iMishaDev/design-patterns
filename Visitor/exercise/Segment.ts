import { AudioFilter } from "./AudioFilter.js";

export abstract class Segment {
    abstract applyFilter(obj: AudioFilter);
}