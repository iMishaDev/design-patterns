export class VideoEditor {
    #contrast = 0.5;
    #text;

    setText(text) {
        this.#text = text;
    }

    removeText() {
        this.#text = "";
    }

    setContrast(contrast) {
        this.#contrast = contrast;
    }
    
    getContrast() {
        return this.#contrast;
    }


    details() {
        return {
            'contrast': this.#contrast,
            'text' : this.#text
        }
    }
}