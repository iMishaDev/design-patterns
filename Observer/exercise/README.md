## exercise#7

We’re building an application for watching the price of various stocks. There are two places in our application where we need to display the stocks:
- StatusBar: shows the popular stocks 
- StockListView: shows the complete list of stocks

When the price of a stock changes, the corresponding views (StatusBar and/or StockListView) need to be refreshed to reflect the latest price.

Our application currently does not have the ability to communicate the change in stock prices to the corresponding views.

Use the observer pattern to solve this problem. 


```
package com.codewithmosh.observer;

import java.util.ArrayList;
import java.util.List;

public class StatusBar {
    private List<Stock> stocks = new ArrayList<>();

    public void addStock(Stock stock) {
        stocks.add(stock);
    }

    public void show() {
        for (var stock : stocks)
            System.out.println(stock);
    }
}

```


```
package com.codewithmosh.observer;

public class Stock {
    private String symbol;
    private float price;

    public Stock(String symbol, float price) {
        this.symbol = symbol;
        this.price = price;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "symbol='" + symbol + '\'' +
                ", price=" + price +
                '}';
    }
}

```


```
package com.codewithmosh.observer;

import java.util.ArrayList;
import java.util.List;

public class StockListView {
    private List<Stock> stocks = new ArrayList<>();

    public void addStock(Stock stock) {
        stocks.add(stock);
    }

    public void show() {
        for (var stock : stocks)
            System.out.println(stock);
    }
}

```