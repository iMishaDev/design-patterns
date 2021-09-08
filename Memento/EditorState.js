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
var _EditorState_title, _EditorState_content, _EditorState_author, _EditorState_editedAt;
export class EditorState {
    constructor(title, content, author, editedAt) {
        _EditorState_title.set(this, void 0);
        _EditorState_content.set(this, void 0);
        _EditorState_author.set(this, void 0);
        _EditorState_editedAt.set(this, void 0);
        __classPrivateFieldSet(this, _EditorState_title, title, "f");
        __classPrivateFieldSet(this, _EditorState_content, content, "f");
        __classPrivateFieldSet(this, _EditorState_author, author, "f");
        __classPrivateFieldSet(this, _EditorState_editedAt, editedAt, "f");
    }
    geTitle() {
        return __classPrivateFieldGet(this, _EditorState_title, "f");
    }
    getContent() {
        return __classPrivateFieldGet(this, _EditorState_content, "f");
    }
    getAuthor() {
        return __classPrivateFieldGet(this, _EditorState_author, "f");
    }
    getEditedAt() {
        return __classPrivateFieldGet(this, _EditorState_editedAt, "f");
    }
}
_EditorState_title = new WeakMap(), _EditorState_content = new WeakMap(), _EditorState_author = new WeakMap(), _EditorState_editedAt = new WeakMap();
