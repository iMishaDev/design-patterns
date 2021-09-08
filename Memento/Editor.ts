import { EditorState } from './EditorState.js';

export class Editor {
    #title;
    #content;
    #author; 
    #createdAt;
    #editedAt;

    constructor(title, content, author, createdAt){
        this.#title = title;
        this.#content = content;
        this.#author = author;
        this.#createdAt = createdAt;
    }



    setTitle(title){
        if(this.#contentIsValid(title)){
            this.#title = title;
        } else {
            console.log('invalid title')
        }
        this.#editedAt = Date.now();
    }


    getTitle(){
        return this.#title;
    }
    


    setContent(content){
        if(this.#contentIsValid(content)){
            this.#content = content;
        } else {
            console.log('invalid content')
        }

        this.#editedAt = Date.now();
    }

    getContent(){
        return this.#content;
    }

    setAuthor(author){
        if(this.#contentIsValid(author)){
            this.#author = author;
        } else {
            console.log('invalid author name')
        }

        this.#editedAt = Date.now();
    }

    getAuthor(){
        return this.#author;
    }

    getCreatedAt(){ 
        return this.#createdAt;
    }


    getEditedAt(){
        return this.#editedAt;
    }

    createState(){
        return new EditorState(this.#title, this.#content, this.#author, this.#editedAt);
    }

    getDetails(){
        return {
            'title': this.getTitle(),
            'content': this.getContent(),
            'author': this.getAuthor(),
            'created_at': this.getCreatedAt(),
            'last_modified': this.getEditedAt()
        }
    }

    restore(state){
        this.#editedAt = Date.now();
        this.#title = state.getTitle();
        this.#content = state.getContent();
        this.#author = state.getAuthor();
    }

    #contentIsValid(content){
        return /^[A-Za-z]/.test(content);
    }
}
