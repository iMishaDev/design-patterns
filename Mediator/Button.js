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
var _Button_isEnabled;
import { UIControl } from "./UIControl.js";
export class Button extends UIControl {
    constructor() {
        super(...arguments);
        _Button_isEnabled.set(this, void 0);
    }
    setIsEnabled(isEnabled) {
        __classPrivateFieldSet(this, _Button_isEnabled, isEnabled, "f");
        this.notifyEventHandlers();
    }
    getIsEnabled() {
        return __classPrivateFieldGet(this, _Button_isEnabled, "f");
    }
}
_Button_isEnabled = new WeakMap();
