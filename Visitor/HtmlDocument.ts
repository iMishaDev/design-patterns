import { HtmlNode } from "./HtmlNode.js";
import { Operation } from "./Operation.js";

export class HtmlDocument implements HtmlNode  {
    #nodes = [];

    add(node){
        this.#nodes.push(node)
    }


    execute(operation: Operation) {
        for(const node of this.#nodes){
            node.execute(operation);
        }
    }
}