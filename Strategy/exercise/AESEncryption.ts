import { Encryption } from "./Encryption.js";

export class AESEncryption implements Encryption {
    encrypt(message) {
        console.log("Encrypting message using AES");
        return 'encrypted message';
    }
}