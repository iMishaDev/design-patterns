var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextBox_content;
import { UIControl } from "./UIControl.js";
export class TextBox extends UIControl {
    constructor() {
        super(...arguments);
        _TextBox_content.set(this, void 0);
    }
    setContent(content) {
        __classPrivateFieldSet(this, _TextBox_content, content, "f");
        this.notifyEventHandlers();
    }
    getContent() {
        return __classPrivateFieldGet(this, _TextBox_content, "f");
    }
}
_TextBox_content = new WeakMap();
