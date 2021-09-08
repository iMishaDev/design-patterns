export class EditorState {
    #title;
    #content;
    #author; 
    #editedAt;

    constructor(title, content, author, editedAt){
        this.#title = title;
        this.#content = content;
        this.#author = author;
        this.#editedAt = editedAt;
    }

    geTitle(){
        return this.#title;
    }

    getContent(){
        return this.#content;
    }

    getAuthor(){
        return this.#author;
    }

    getEditedAt(){
        return this.#editedAt;
    }
}