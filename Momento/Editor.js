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
var _Editor_instances, _Editor_content, _Editor_contentIsValid;
import { EditorState } from './EditorState.js';
export class Editor {
    constructor(content) {
        _Editor_instances.add(this);
        _Editor_content.set(this, void 0);
        __classPrivateFieldSet(this, _Editor_content, content, "f");
    }
    setContent(content) {
        if (__classPrivateFieldGet(this, _Editor_instances, "m", _Editor_contentIsValid).call(this, content)) {
            __classPrivateFieldSet(this, _Editor_content, content, "f");
        }
        else {
            console.log('invalid content');
        }
    }
    getContent() {
        return __classPrivateFieldGet(this, _Editor_content, "f");
    }
    createState() {
        return new EditorState(__classPrivateFieldGet(this, _Editor_content, "f"));
    }
    restore(state) {
        return __classPrivateFieldSet(this, _Editor_content, state.getContent(), "f");
    }
}
_Editor_content = new WeakMap(), _Editor_instances = new WeakSet(), _Editor_contentIsValid = function _Editor_contentIsValid(content) {
    return /^[A-Za-z]/.test(content);
};
