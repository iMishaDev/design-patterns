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
var _Canvas_currentTool;
export class Canvas {
    constructor() {
        _Canvas_currentTool.set(this, void 0);
    }
    mouseUp() {
        __classPrivateFieldGet(this, _Canvas_currentTool, "f").mouseUp();
    }
    mouseDown() {
        __classPrivateFieldGet(this, _Canvas_currentTool, "f").mouseDown();
    }
    getCurrentTool() {
        return __classPrivateFieldGet(this, _Canvas_currentTool, "f");
    }
    setCurrentTool(currentTool) {
        __classPrivateFieldSet(this, _Canvas_currentTool, currentTool, "f");
    }
}
_Canvas_currentTool = new WeakMap();
