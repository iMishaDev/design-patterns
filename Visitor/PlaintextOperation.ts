import { AnchorNode } from "./AnchorNode.js";
import { HeadingNode } from "./HeadingNode.js";
import { Operation } from "./Operation.js";

export class PlaintextOperation implements Operation {
    apply(anchor: AnchorNode);
    apply(heading: HeadingNode);
    apply(heading: any): any {
        console.log('plain text', heading)
    }
}