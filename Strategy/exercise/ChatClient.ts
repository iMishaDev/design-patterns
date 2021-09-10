export class ChatClient {
    #encryptionAlgorithm;

    constructor(encryptionAlgorithm) {
        this.#encryptionAlgorithm = encryptionAlgorithm;
    }

    send(message) {
        let encryptedMessage = this.#encryptionAlgorithm.encrypt(message);
        console.log("Sending the encrypted message...", encryptedMessage);
    }
}