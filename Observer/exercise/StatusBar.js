var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StatusBar_stockList;
export class StatusBar {
    constructor() {
        _StatusBar_stockList.set(this, []);
    }
    add(stock) {
        __classPrivateFieldGet(this, _StatusBar_stockList, "f").push(stock);
    }
    show() {
        for (const stock of __classPrivateFieldGet(this, _StatusBar_stockList, "f")) {
            console.log(stock.details());
        }
    }
    update() {
        console.log('Stock prices changed ... refreshing the stocks');
        this.show();
    }
}
_StatusBar_stockList = new WeakMap();
