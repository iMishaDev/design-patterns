import { DocumentState } from "./DocumentState.js";

export class Document {
    #content;
    #fontName;
    #fontSize;

    constructor(content, fontName, fontSize){
        this.#content = content;
        this.#fontName = fontName;
        this.#fontSize = fontSize;
    }


    getContent() {
        return this.#content;
    }

    setContent(content) {
        this.#content = content;
    }

    getFontName() {
        return this.#fontName;
    }

    setFontName(fontName) {
        this.#fontName = fontName;
    }

    getFontSize() {
        return this.#fontSize;
    }

    setFontSize(fontSize) {
        this.#fontSize = fontSize;
    }

    createState(){
        return new DocumentState(this.#content, this.#fontName, this.#fontSize);
    }

    restore(state){
        console.log('state', state)
        this.#content = state.getContent();
        this.#fontName = state.getFontName();
        this.#fontSize = state.getFontSize();
    }


    getDetails() {
        return {
                'content': this.#content,
                'fontName': this.#fontName,
                'fontSize': this.#fontSize
        }
    }
}
