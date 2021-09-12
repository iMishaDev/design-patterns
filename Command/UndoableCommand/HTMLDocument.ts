export class HTMLDocument {
    #content;

    constructor(content=''){
        this.#content = content;
    }

    makeBold(){
        return this.#content = `<b>${this.#content}</b>`;
    }

    setContent(content){
        this.#content = content;
    }

    getContent(){
        return this.#content;
    }
}