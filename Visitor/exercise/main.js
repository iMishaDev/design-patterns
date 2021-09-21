import { NoiseReductionFilter } from "./NoiseReductionFilter.js";
import { WavFile } from "./WavFile.js";
let file = WavFile.read('file');
let noiseReduction = new NoiseReductionFilter();
file.applyFilter(noiseReduction);
