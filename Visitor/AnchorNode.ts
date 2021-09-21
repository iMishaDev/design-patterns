import { HtmlNode } from "./HtmlNode.js";

export class AnchorNode implements HtmlNode {
    execute(operation) {
        operation.apply(this);
    }
}