var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticlesDialogBox_listBox, _ArticlesDialogBox_textBox, _ArticlesDialogBox_button;
import { Button } from "./Button.js";
import { ListBox } from "./ListBox.js";
import { TextBox } from "./TextBox.js";
export class ArticlesDialogBox {
    constructor() {
        _ArticlesDialogBox_listBox.set(this, new ListBox());
        _ArticlesDialogBox_textBox.set(this, new TextBox());
        _ArticlesDialogBox_button.set(this, new Button());
        __classPrivateFieldGet(this, _ArticlesDialogBox_listBox, "f").addEventHandler(() => this.listBoxChanged());
        __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").addEventHandler(() => this.titleChanged());
    }
    simulate() {
        __classPrivateFieldGet(this, _ArticlesDialogBox_listBox, "f").setSelection('Article 1');
        __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").setContent('');
        __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").setContent('Article 2');
        console.log('button', __classPrivateFieldGet(this, _ArticlesDialogBox_button, "f").getIsEnabled());
        console.log('text box', __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").getContent());
    }
    titleChanged() {
        let content = __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").getContent();
        let isEmpty = content === null || content === '';
        __classPrivateFieldGet(this, _ArticlesDialogBox_button, "f").setIsEnabled(!isEmpty);
    }
    listBoxChanged() {
        __classPrivateFieldGet(this, _ArticlesDialogBox_textBox, "f").setContent(__classPrivateFieldGet(this, _ArticlesDialogBox_listBox, "f").getSelection());
        __classPrivateFieldGet(this, _ArticlesDialogBox_button, "f").setIsEnabled(true);
    }
}
_ArticlesDialogBox_listBox = new WeakMap(), _ArticlesDialogBox_textBox = new WeakMap(), _ArticlesDialogBox_button = new WeakMap();
