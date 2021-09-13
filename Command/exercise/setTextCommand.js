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
var _SetTextCommand_text;
import { AbstractUnDoableCommand } from "./AbstractUnDoableCommand.js";
export class SetTextCommand extends AbstractUnDoableCommand {
    constructor(text, history, videoEditor) {
        super(history, videoEditor);
        _SetTextCommand_text.set(this, void 0);
        __classPrivateFieldSet(this, _SetTextCommand_text, text, "f");
    }
    doExecute() {
        this.videoEditor.setText(__classPrivateFieldGet(this, _SetTextCommand_text, "f"));
    }
    unExecute() {
        this.videoEditor.removeText();
    }
}
_SetTextCommand_text = new WeakMap();
