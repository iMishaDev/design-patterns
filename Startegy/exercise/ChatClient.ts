export class ChatClient {
    #encryptionAlgorithm;

    constructor(encryptionAlgorithm) {
        this.#encryptionAlgorithm = encryptionAlgorithm;
    }

    send(message) {
        this.#encryptionAlgorithm.encrypt(message);

        // if ( this.#encryptionAlgorith == "DES")
            
        // else if ( this.#encryptionAlgorith == "AES")
        //     System.out.println("Encrypting message using AES");
        // else
        //     throw new UnsupportedOperationException("Unsupported encryption algorithm");

        console.log("Sending the encrypted message...");
    }
}