import { BrowserHistory } from "./BrowserHistory.js";
let history = new BrowserHistory();
history.push('q');
history.push('a');
history.push('h');
history.push('k');
let iterator = history.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}
