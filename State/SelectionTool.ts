import { Tool } from './Tool.js';

export class SelectionTool implements Tool {
    mouseDown() {
        console.log('selection icon')
    }
    mouseUp() {
        console.log('draw a dashed rectangle ')
    } 

}