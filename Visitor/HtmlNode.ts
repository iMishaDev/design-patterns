import { Operation } from "./Operation.js";

export interface HtmlNode {
    execute(operation: Operation);
}