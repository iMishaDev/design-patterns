## Exercise#3 

In the Exercises project, look at the iterator/ProductCollection class. This class only allows us to add a product to a collection. Once we add a bunch of products to a collection, there is no way to iterate that collection and print the products. 

## Implement this feature using the iterator pattern. 

```
package com.codewithmosh.iterator;

public class Product {
  private int id;
  private String name;

  public Product(int id, String name) {
    this.id = id;
    this.name = name;
  }

  @Override
  public String   toString() {
    return "Product{" +
            "id=" + id +
            ", name='" + name + '\'' +
            '}';
  }
}

```


```
package com.codewithmosh.iterator;

import java.util.ArrayList;
import java.util.List;

public class ProductCollection {
  private List<Product> products = new ArrayList<>();

  public void add(Product product) {
    products.add(product);
  }

}
```