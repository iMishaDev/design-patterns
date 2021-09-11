import { Window } from "./Window.js";
export class EditorWindow extends Window {
        protected preClose() {
                console.log('do stuff before closing the editor window')
        }
        protected postClose() {
                console.log('do stuff after closing the editor window')
        }
        
}