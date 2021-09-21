import { AnchorNode } from "./AnchorNode.js";
import { HeadingNode } from "./HeadingNode.js";
import { HighlightOperation } from "./HighlightOperation.js";
import { HtmlDocument } from "./HtmlDocument.js";
import { PlaintextOperation } from "./PlaintextOperation.js";

let anchorNode = new AnchorNode();
let headingNode = new HeadingNode();

let document = new HtmlDocument();
document.add(anchorNode);
document.add(headingNode);
document.execute(new HighlightOperation());
document.execute(new PlaintextOperation());