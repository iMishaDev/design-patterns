export class VideoEditor {
    #contrast = 0.5;
    #text;

    constructor(){

    }
    
    setText(text) {
        this.#text = text;
    }

    removeText() {
        this.#text = "";
    }

    getContrast() {
        return this.#contrast;
    }

    setContrast(contrast) {
        this.#contrast = contrast;
    }

    details() {
        return {
            'contrast': this.#contrast,
            'text' : this.#text
        }
    }
}