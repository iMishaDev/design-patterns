import { AESEncryption } from "./AESEncryption.js";
import { ChatClient } from "./ChatClient.js";
import { DESEncryption } from "./DESEncryption.js";

let chatClient = new ChatClient(new DESEncryption());

chatClient.send('hello')


let chatClient2 = new ChatClient(new AESEncryption());
chatClient2.send('hello')