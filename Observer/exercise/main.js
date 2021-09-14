import { StatusBar } from "./StatusBar.js";
import { TCStock } from "./TCStock.js";
import { StockListView } from "./StockListView.js";
let stock1 = new TCStock('e', 15);
let stock2 = new TCStock('t', 45);
let statusBar = new StatusBar();
let listView = new StockListView();
statusBar.add(stock1);
statusBar.add(stock2);
listView.add(stock1);
listView.add(stock2);
stock1.addObserver(statusBar);
stock1.addObserver(listView);
stock2.addObserver(statusBar);
stock2.addObserver(listView);
console.log(stock1.details());
console.log(stock2.details());
stock1.setPrice(30);
stock2.setPrice(100);
