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
var _Editor_instances, _Editor_title, _Editor_content, _Editor_author, _Editor_createdAt, _Editor_editedAt, _Editor_contentIsValid;
import { EditorState } from './EditorState.js';
export class Editor {
    constructor(title, content, author, createdAt) {
        _Editor_instances.add(this);
        _Editor_title.set(this, void 0);
        _Editor_content.set(this, void 0);
        _Editor_author.set(this, void 0);
        _Editor_createdAt.set(this, void 0);
        _Editor_editedAt.set(this, void 0);
        __classPrivateFieldSet(this, _Editor_title, title, "f");
        __classPrivateFieldSet(this, _Editor_content, content, "f");
        __classPrivateFieldSet(this, _Editor_author, author, "f");
        __classPrivateFieldSet(this, _Editor_createdAt, createdAt, "f");
    }
    setTitle(title) {
        if (__classPrivateFieldGet(this, _Editor_instances, "m", _Editor_contentIsValid).call(this, title)) {
            __classPrivateFieldSet(this, _Editor_title, title, "f");
        }
        else {
            console.log('invalid title');
        }
        __classPrivateFieldSet(this, _Editor_editedAt, Date.now(), "f");
    }
    getTitle() {
        return __classPrivateFieldGet(this, _Editor_title, "f");
    }
    setContent(content) {
        if (__classPrivateFieldGet(this, _Editor_instances, "m", _Editor_contentIsValid).call(this, content)) {
            __classPrivateFieldSet(this, _Editor_content, content, "f");
        }
        else {
            console.log('invalid content');
        }
        __classPrivateFieldSet(this, _Editor_editedAt, Date.now(), "f");
    }
    getContent() {
        return __classPrivateFieldGet(this, _Editor_content, "f");
    }
    setAuthor(author) {
        if (__classPrivateFieldGet(this, _Editor_instances, "m", _Editor_contentIsValid).call(this, author)) {
            __classPrivateFieldSet(this, _Editor_author, author, "f");
        }
        else {
            console.log('invalid author name');
        }
        __classPrivateFieldSet(this, _Editor_editedAt, Date.now(), "f");
    }
    getAuthor() {
        return __classPrivateFieldGet(this, _Editor_author, "f");
    }
    getCreatedAt() {
        return __classPrivateFieldGet(this, _Editor_createdAt, "f");
    }
    getEditedAt() {
        return __classPrivateFieldGet(this, _Editor_editedAt, "f");
    }
    createState() {
        return new EditorState(__classPrivateFieldGet(this, _Editor_title, "f"), __classPrivateFieldGet(this, _Editor_content, "f"), __classPrivateFieldGet(this, _Editor_author, "f"), __classPrivateFieldGet(this, _Editor_editedAt, "f"));
    }
    getDetails() {
        return {
            'title': this.getTitle(),
            'content': this.getContent(),
            'author': this.getAuthor(),
            'created_at': this.getCreatedAt(),
            'last_modified': this.getEditedAt()
        };
    }
    restore(state) {
        __classPrivateFieldSet(this, _Editor_editedAt, Date.now(), "f");
        return __classPrivateFieldSet(this, _Editor_content, state.getContent(), "f");
    }
}
_Editor_title = new WeakMap(), _Editor_content = new WeakMap(), _Editor_author = new WeakMap(), _Editor_createdAt = new WeakMap(), _Editor_editedAt = new WeakMap(), _Editor_instances = new WeakSet(), _Editor_contentIsValid = function _Editor_contentIsValid(content) {
    return /^[A-Za-z]/.test(content);
};
