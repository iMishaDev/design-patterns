import { Encryption } from "./Encryption.js";

export class AESEncryption implements Encryption {
    encrypt() {
        console.log("Encrypting message using AES")
    }
}