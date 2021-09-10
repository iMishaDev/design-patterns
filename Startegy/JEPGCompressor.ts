import { Compressor } from "./Compressor.js";

export class JPEGCompressor implements Compressor {
    compress(image) {
        console.log('compressing to jpeg', image)
    }
}