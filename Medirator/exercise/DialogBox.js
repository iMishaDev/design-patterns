var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DialogBox_usernameBox, _DialogBox_passwordBox, _DialogBox_button, _DialogBox_checkBox;
import { Button } from "./Button.js";
import { CheckBox } from "./CheckBox.js";
import { TextBox } from "./TextBox.js";
export class DialogBox {
    constructor() {
        _DialogBox_usernameBox.set(this, new TextBox());
        _DialogBox_passwordBox.set(this, new TextBox());
        _DialogBox_button.set(this, new Button());
        _DialogBox_checkBox.set(this, new CheckBox());
        __classPrivateFieldGet(this, _DialogBox_usernameBox, "f").addListener(() => this.dialogObserver());
        __classPrivateFieldGet(this, _DialogBox_passwordBox, "f").addListener(() => this.dialogObserver());
        __classPrivateFieldGet(this, _DialogBox_checkBox, "f").addListener(() => this.dialogObserver());
    }
    dialogObserver() {
        if (this.formIsValid())
            __classPrivateFieldGet(this, _DialogBox_button, "f").setIsEnabled(true);
        else
            __classPrivateFieldGet(this, _DialogBox_button, "f").setIsEnabled(false);
    }
    formIsValid() {
        return __classPrivateFieldGet(this, _DialogBox_usernameBox, "f").getContent() !== ''
            && __classPrivateFieldGet(this, _DialogBox_passwordBox, "f").getContent() !== ''
            && __classPrivateFieldGet(this, _DialogBox_checkBox, "f").isChecked();
    }
    simulate() {
        console.log("Initially: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled()); // by default is disabled
        __classPrivateFieldGet(this, _DialogBox_usernameBox, "f").setContent("username");
        console.log("After setting the username: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled());
        __classPrivateFieldGet(this, _DialogBox_passwordBox, "f").setContent("password");
        console.log("After setting the password: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled());
        __classPrivateFieldGet(this, _DialogBox_checkBox, "f").setChecked(true);
        console.log("After agreeing to terms: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled());
        __classPrivateFieldGet(this, _DialogBox_passwordBox, "f").setContent("");
        console.log("After removing the password: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled());
        __classPrivateFieldGet(this, _DialogBox_passwordBox, "f").setContent("password");
        console.log("After re-setting the password: " + __classPrivateFieldGet(this, _DialogBox_button, "f").isEnabled());
    }
}
_DialogBox_usernameBox = new WeakMap(), _DialogBox_passwordBox = new WeakMap(), _DialogBox_button = new WeakMap(), _DialogBox_checkBox = new WeakMap();
