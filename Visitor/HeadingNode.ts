import { HtmlNode } from "./HtmlNode.js";

export class HeadingNode implements HtmlNode {
    execute(operation) {
        operation.apply(this);
    }
}