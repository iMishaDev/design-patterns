import { BlackWhiteFilter } from "./BlackWhiteFilter.js";
import { ImageStorage } from "./ImageStorage.js";
import { JPEGCompressor } from "./JEPGCompressor.js";
let imageStorage = new ImageStorage();
imageStorage.store('image', new JPEGCompressor(), new BlackWhiteFilter());
