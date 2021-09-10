import { Encryption } from "./Encryption.js";

export class DESEncryption implements Encryption {
    encrypt(message) {
        console.log("Encrypting message using DES");
        return 'encrypted message';
    }
    
}