import { AnchorNode } from "./AnchorNode.js";
import { HeadingNode } from "./HeadingNode.js";
import { Operation } from "./Operation.js";

export class HighlightOperation implements Operation {
    apply(anchor: AnchorNode);
    apply(heading: HeadingNode);
    apply(heading: any): any {
        console.log('highlighting', heading)
    }
}