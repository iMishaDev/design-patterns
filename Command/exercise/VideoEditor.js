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
var _VideoEditor_contrast, _VideoEditor_text;
export class VideoEditor {
    constructor() {
        _VideoEditor_contrast.set(this, 0.5);
        _VideoEditor_text.set(this, void 0);
    }
    setText(text) {
        __classPrivateFieldSet(this, _VideoEditor_text, text, "f");
    }
    removeText() {
        __classPrivateFieldSet(this, _VideoEditor_text, "", "f");
    }
    setContrast(contrast) {
        __classPrivateFieldSet(this, _VideoEditor_contrast, contrast, "f");
    }
    getContrast() {
        return __classPrivateFieldGet(this, _VideoEditor_contrast, "f");
    }
    details() {
        return {
            'contrast': __classPrivateFieldGet(this, _VideoEditor_contrast, "f"),
            'text': __classPrivateFieldGet(this, _VideoEditor_text, "f")
        };
    }
}
_VideoEditor_contrast = new WeakMap(), _VideoEditor_text = new WeakMap();
