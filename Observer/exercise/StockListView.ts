import { Observer } from "./Observer.js";

export class StockListView implements Observer {
    #stockList = [];

    
    add(stock){
        this.#stockList.push(stock)
    }

    show() {
        for(const stock of this.#stockList){
            console.log(stock.details());
        }
    }

    update() {
        console.log('Stock prices changed ... refreshing the stocks')
        this.show();
    }
}