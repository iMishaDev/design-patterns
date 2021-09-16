import { Button } from "./Button.js";
import { CheckBox } from "./CheckBox.js";
import { TextBox } from "./TextBox.js";

export class DialogBox {
    #usernameBox = new TextBox();
    #passwordBox = new TextBox();
    #button = new Button();
    #checkBox = new CheckBox();

    constructor(){
        this.#usernameBox.addListener(() => this.dialogObserver())
        this.#passwordBox.addListener(() => this.dialogObserver())
        this.#checkBox.addListener(() => this.dialogObserver())
    }

    dialogObserver(){
        if(this.formIsValid())
            this.#button.setIsEnabled(true);
        else this.#button.setIsEnabled(false);
    }


    formIsValid(){
        return this.#usernameBox.getContent() !== '' 
        && this.#passwordBox.getContent() !== ''
        && this.#checkBox.isChecked()
    }


    simulate(){
        console.log("Initially: " + this.#button.isEnabled()); // by default is disabled

        this.#usernameBox.setContent("username");
        console.log("After setting the username: " + this.#button.isEnabled());

        this.#passwordBox.setContent("password");
        console.log("After setting the password: " + this.#button.isEnabled());

        this.#checkBox.setChecked(true);
        console.log("After agreeing to terms: " + this.#button.isEnabled());

        this.#passwordBox.setContent("");
        console.log("After removing the password: " + this.#button.isEnabled());

        this.#passwordBox.setContent("password");
        console.log("After re-setting the password: " + this.#button.isEnabled());
    }
}