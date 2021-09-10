import { Filter } from "./Filter.js";

export class BlackWhiteFilter implements Filter {
    apply(image) {
        console.log('apply black & white filter', image)
    }
}