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
var _BoldCommand_prevContent, _BoldCommand_htmlDocument, _BoldCommand_history;
export class BoldCommand {
    constructor(document, history) {
        _BoldCommand_prevContent.set(this, void 0);
        _BoldCommand_htmlDocument.set(this, void 0);
        _BoldCommand_history.set(this, void 0);
        __classPrivateFieldSet(this, _BoldCommand_htmlDocument, document, "f");
        __classPrivateFieldSet(this, _BoldCommand_history, history, "f");
    }
    unExecute() {
        __classPrivateFieldGet(this, _BoldCommand_htmlDocument, "f").setContent(__classPrivateFieldGet(this, _BoldCommand_prevContent, "f"));
    }
    execute() {
        __classPrivateFieldSet(this, _BoldCommand_prevContent, __classPrivateFieldGet(this, _BoldCommand_htmlDocument, "f").getContent(), "f");
        __classPrivateFieldGet(this, _BoldCommand_htmlDocument, "f").makeBold();
        __classPrivateFieldGet(this, _BoldCommand_history, "f").push(this);
    }
}
_BoldCommand_prevContent = new WeakMap(), _BoldCommand_htmlDocument = new WeakMap(), _BoldCommand_history = new WeakMap();
