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
var _ChatClient_encryptionAlgorithm;
export class ChatClient {
    constructor(encryptionAlgorithm) {
        _ChatClient_encryptionAlgorithm.set(this, void 0);
        __classPrivateFieldSet(this, _ChatClient_encryptionAlgorithm, encryptionAlgorithm, "f");
    }
    send(message) {
        __classPrivateFieldGet(this, _ChatClient_encryptionAlgorithm, "f").encrypt(message);
        // if ( this.#encryptionAlgorith == "DES")
        // else if ( this.#encryptionAlgorith == "AES")
        //     System.out.println("Encrypting message using AES");
        // else
        //     throw new UnsupportedOperationException("Unsupported encryption algorithm");
        console.log("Sending the encrypted message...");
    }
}
_ChatClient_encryptionAlgorithm = new WeakMap();
