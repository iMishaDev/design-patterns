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
var _SetContrastCommand_contrast, _SetContrastCommand_prevContrast;
import { AbstractUnDoableCommand } from "./AbstractUnDoableCommand.js";
export class SetContrastCommand extends AbstractUnDoableCommand {
    constructor(contrast, history, videoEditor) {
        super(history, videoEditor);
        _SetContrastCommand_contrast.set(this, void 0);
        _SetContrastCommand_prevContrast.set(this, void 0);
        __classPrivateFieldSet(this, _SetContrastCommand_prevContrast, videoEditor.getContrast(), "f");
        __classPrivateFieldSet(this, _SetContrastCommand_contrast, contrast, "f");
    }
    doExecute() {
        this.videoEditor.setContrast(__classPrivateFieldGet(this, _SetContrastCommand_contrast, "f"));
    }
    unExecute() {
        this.videoEditor.setContrast(__classPrivateFieldGet(this, _SetContrastCommand_prevContrast, "f"));
    }
}
_SetContrastCommand_contrast = new WeakMap(), _SetContrastCommand_prevContrast = new WeakMap();
