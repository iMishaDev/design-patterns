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
var _HttpRequest_username, _HttpRequest_password;
export class HttpRequest {
    constructor(username, password) {
        _HttpRequest_username.set(this, void 0);
        _HttpRequest_password.set(this, void 0);
        __classPrivateFieldSet(this, _HttpRequest_username, username, "f");
        __classPrivateFieldSet(this, _HttpRequest_password, password, "f");
    }
    getUserName() {
        return __classPrivateFieldGet(this, _HttpRequest_username, "f");
    }
    getPassword() {
        return __classPrivateFieldGet(this, _HttpRequest_password, "f");
    }
}
_HttpRequest_username = new WeakMap(), _HttpRequest_password = new WeakMap();
