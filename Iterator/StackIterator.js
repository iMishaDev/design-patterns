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
var _StackIterator_browseHistory, _StackIterator_index;
export class StackIterator {
    constructor(browseHistory) {
        _StackIterator_browseHistory.set(this, void 0);
        _StackIterator_index.set(this, 0);
        __classPrivateFieldSet(this, _StackIterator_browseHistory, browseHistory, "f");
    }
    hasNext() {
        return __classPrivateFieldGet(this, _StackIterator_index, "f") < __classPrivateFieldGet(this, _StackIterator_browseHistory, "f").urls.length;
    }
    next() {
        var _a;
        __classPrivateFieldSet(this, _StackIterator_index, (_a = __classPrivateFieldGet(this, _StackIterator_index, "f"), _a++, _a), "f");
    }
    current() {
        return __classPrivateFieldGet(this, _StackIterator_browseHistory, "f").urls[__classPrivateFieldGet(this, _StackIterator_index, "f")];
    }
}
_StackIterator_browseHistory = new WeakMap(), _StackIterator_index = new WeakMap();
