
import { StackIterator } from './StackIterator.js';

export class BrowserHistory {
    urls;

    constructor(){
        this.urls = [];
    }

    getUrls(){
        return this.urls;
    }

    push(url){
        this.urls.push(url);
    }

    pop(){
        return this.urls.pop();
    }

    createIterator(){
        return new StackIterator(this);
    }

}