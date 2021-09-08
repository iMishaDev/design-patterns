import { Tool } from './Tool.js';

export class BrushTool implements Tool {
    mouseDown() {
        console.log('brush icon')
    }
    mouseUp() {
        console.log('draw line ')
    } 

}