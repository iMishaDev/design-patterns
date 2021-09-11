import { Window } from "./Window.js";
export class BrowserWindow extends Window {
    preClose() {
        console.log('do stuff before closing the browser window');
    }
    postClose() {
        console.log('do stuff after closing the browser window');
    }
}
