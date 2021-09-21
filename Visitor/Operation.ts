import { AnchorNode } from "./AnchorNode.js";
import { HeadingNode } from "./HeadingNode.js";

export interface Operation {
    apply(anchor: AnchorNode);
    apply(heading: HeadingNode);
}