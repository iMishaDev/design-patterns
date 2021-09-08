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
var _DocumentState_content, _DocumentState_fontName, _DocumentState_fontSize;
export class DocumentState {
    constructor(content, fontName, fontSize) {
        _DocumentState_content.set(this, void 0);
        _DocumentState_fontName.set(this, void 0);
        _DocumentState_fontSize.set(this, void 0);
        __classPrivateFieldSet(this, _DocumentState_content, content, "f");
        __classPrivateFieldSet(this, _DocumentState_fontName, fontName, "f");
        __classPrivateFieldSet(this, _DocumentState_fontSize, fontSize, "f");
    }
    getContent() {
        return __classPrivateFieldGet(this, _DocumentState_content, "f");
    }
    getFontName() {
        return __classPrivateFieldGet(this, _DocumentState_fontName, "f");
    }
    getFontSize() {
        return __classPrivateFieldGet(this, _DocumentState_fontSize, "f");
    }
}
_DocumentState_content = new WeakMap(), _DocumentState_fontName = new WeakMap(), _DocumentState_fontSize = new WeakMap();
