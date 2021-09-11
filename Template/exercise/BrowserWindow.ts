import { Window } from "./Window.js";
export class BrowserWindow extends Window {
        protected preClose() {
                console.log('do stuff before closing the browser window')
        }
        protected postClose() {
                console.log('do stuff after closing the browser window')
        }
        
}