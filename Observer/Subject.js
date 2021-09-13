var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Subject_observers;
export class Subject {
    constructor() {
        _Subject_observers.set(this, []);
    }
    addObserver(observer) {
        __classPrivateFieldGet(this, _Subject_observers, "f").push(observer);
    }
    removeObserver(observer) {
        __classPrivateFieldGet(this, _Subject_observers, "f").filter((ob) => ob !== observer);
    }
    notifyObservers() {
        for (const observer of __classPrivateFieldGet(this, _Subject_observers, "f")) {
            observer.update();
        }
    }
}
_Subject_observers = new WeakMap();
