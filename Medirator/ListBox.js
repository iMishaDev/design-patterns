var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ListBox_selection;
import { UIControl } from "./UIControl.js";
export class ListBox extends UIControl {
    constructor() {
        super(...arguments);
        _ListBox_selection.set(this, void 0);
    }
    getSelection() {
        return __classPrivateFieldGet(this, _ListBox_selection, "f");
    }
    setSelection(selection) {
        __classPrivateFieldSet(this, _ListBox_selection, selection, "f");
        this.notifyEventHandlers();
    }
}
_ListBox_selection = new WeakMap();
