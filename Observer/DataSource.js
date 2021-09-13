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
var _DataSource_value;
import { Subject } from "./Subject.js";
export class DataSource extends Subject {
    constructor() {
        super(...arguments);
        _DataSource_value.set(this, void 0);
    }
    setValue(value) {
        __classPrivateFieldSet(this, _DataSource_value, value, "f");
        this.notifyObservers();
    }
    getValue() {
        return __classPrivateFieldGet(this, _DataSource_value, "f");
    }
}
_DataSource_value = new WeakMap();
