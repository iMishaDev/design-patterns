import { Window } from "./Window.js";
export class EditorWindow extends Window {
    preClose() {
        console.log('do stuff before closing the editor window');
    }
    postClose() {
        console.log('do stuff after closing the editor window');
    }
}
