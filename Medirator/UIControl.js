var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UIControl_eventHandlers;
export class UIControl {
    constructor() {
        _UIControl_eventHandlers.set(this, []);
    }
    addEventHandler(eventHandler) {
        __classPrivateFieldGet(this, _UIControl_eventHandlers, "f").push(eventHandler);
    }
    notifyEventHandlers() {
        for (const eventHandler of __classPrivateFieldGet(this, _UIControl_eventHandlers, "f")) {
            eventHandler();
        }
    }
}
_UIControl_eventHandlers = new WeakMap();
