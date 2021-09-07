import { EditorState } from './EditorState.js';

export class Editor {
    #content;

    constructor(content){
        this.#content = content;
    }

    setContent(content){
        if(this.#contentIsValid(content)){
            this.#content = content;
        } else {
            console.log('invalid content')
        }
    }

    getContent(){
        return this.#content;
    }


    createState(){
        return new EditorState(this.#content);
    }

    restore(state){
        return this.#content = state.getContent();
    }

    #contentIsValid(content){
        return /^[A-Za-z]/.test(content);
    }
}
