class Product {
    #id;
    #name;

    Product(id, name) {
        this.#id = id;
        this.#name = name;
    }

    details() {
        return {
            'id': this.#id,
            'name': this.#name
        }
    }
}