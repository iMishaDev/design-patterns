var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HtmlDocument_nodes;
export class HtmlDocument {
    constructor() {
        _HtmlDocument_nodes.set(this, []);
    }
    add(node) {
        __classPrivateFieldGet(this, _HtmlDocument_nodes, "f").push(node);
    }
    execute(operation) {
        for (const node of __classPrivateFieldGet(this, _HtmlDocument_nodes, "f")) {
            node.execute(operation);
        }
    }
}
_HtmlDocument_nodes = new WeakMap();
