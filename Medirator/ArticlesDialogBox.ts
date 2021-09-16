import { Button } from "./Button.js";
import { ListBox } from "./ListBox.js";
import { TextBox } from "./TextBox.js";

export class ArticlesDialogBox  {
    #listBox = new ListBox();
    #textBox = new TextBox();
    #button = new Button(); 

    constructor(){
        this.#listBox.addEventHandler(() => this.listBoxChanged())
        this.#textBox.addEventHandler(() => this.titleChanged())
    }

    simulate(){
        this.#listBox.setSelection('Article 1');
        this.#textBox.setContent('');
        this.#textBox.setContent('Article 2');
        console.log('button', this.#button.getIsEnabled());
        console.log('text box', this.#textBox.getContent());

    }

    titleChanged(){
        let content = this.#textBox.getContent();
        let isEmpty = content === null || content === ''
        this.#button.setIsEnabled(!isEmpty);
    }


    listBoxChanged(){
        this.#textBox.setContent(this.#listBox.getSelection())
        this.#button.setIsEnabled(true);
    }
}