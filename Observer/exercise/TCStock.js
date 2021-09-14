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
var _TCStock_symbol, _TCStock_price;
import { Subject } from "./Subject.js";
export class TCStock extends Subject {
    constructor(symbol, price) {
        super();
        _TCStock_symbol.set(this, void 0);
        _TCStock_price.set(this, void 0);
        __classPrivateFieldSet(this, _TCStock_symbol, symbol, "f");
        __classPrivateFieldSet(this, _TCStock_price, price, "f");
    }
    getPrice() {
        return __classPrivateFieldGet(this, _TCStock_price, "f");
    }
    setPrice(price) {
        __classPrivateFieldSet(this, _TCStock_price, price, "f");
        this.notifyObservers();
    }
    details() {
        return {
            'symbol': __classPrivateFieldGet(this, _TCStock_symbol, "f"),
            'price': __classPrivateFieldGet(this, _TCStock_price, "f")
        };
    }
}
_TCStock_symbol = new WeakMap(), _TCStock_price = new WeakMap();
