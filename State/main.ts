import { BrushTool } from "./BrushTool.js";
import { Canvas } from "./Canvas.js";
import { SelectionTool } from './SelectionTool.js';


let canvas = new Canvas();
canvas.setCurrentTool(new SelectionTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.setCurrentTool(new BrushTool());
canvas.mouseDown();
canvas.mouseUp();

