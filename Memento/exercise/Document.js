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
var _Document_content, _Document_fontName, _Document_fontSize;
import { DocumentState } from "./DocumentState.js";
export class Document {
    constructor(content, fontName, fontSize) {
        _Document_content.set(this, void 0);
        _Document_fontName.set(this, void 0);
        _Document_fontSize.set(this, void 0);
        __classPrivateFieldSet(this, _Document_content, content, "f");
        __classPrivateFieldSet(this, _Document_fontName, fontName, "f");
        __classPrivateFieldSet(this, _Document_fontSize, fontSize, "f");
    }
    getContent() {
        return __classPrivateFieldGet(this, _Document_content, "f");
    }
    setContent(content) {
        __classPrivateFieldSet(this, _Document_content, content, "f");
    }
    getFontName() {
        return __classPrivateFieldGet(this, _Document_fontName, "f");
    }
    setFontName(fontName) {
        __classPrivateFieldSet(this, _Document_fontName, fontName, "f");
    }
    getFontSize() {
        return __classPrivateFieldGet(this, _Document_fontSize, "f");
    }
    setFontSize(fontSize) {
        __classPrivateFieldSet(this, _Document_fontSize, fontSize, "f");
    }
    createState() {
        return new DocumentState(__classPrivateFieldGet(this, _Document_content, "f"), __classPrivateFieldGet(this, _Document_fontName, "f"), __classPrivateFieldGet(this, _Document_fontSize, "f"));
    }
    restore(state) {
        console.log('state', state);
        __classPrivateFieldSet(this, _Document_content, state.getContent(), "f");
        __classPrivateFieldSet(this, _Document_fontName, state.getFontName(), "f");
        __classPrivateFieldSet(this, _Document_fontSize, state.getFontSize(), "f");
    }
    getDetails() {
        return {
            'content': __classPrivateFieldGet(this, _Document_content, "f"),
            'fontName': __classPrivateFieldGet(this, _Document_fontName, "f"),
            'fontSize': __classPrivateFieldGet(this, _Document_fontSize, "f")
        };
    }
}
_Document_content = new WeakMap(), _Document_fontName = new WeakMap(), _Document_fontSize = new WeakMap();
