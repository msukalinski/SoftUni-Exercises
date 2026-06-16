class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        const findProduct = this.productStock
            .find(p => p.productName === productName && p.size === size);

        if (findProduct) {
            findProduct.quantity += Number(quantity);

            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }

        this.productStock.push({ productName, size, quantity, price });

        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

    sendProduct(productName, size) {
        const findProduct = this.productStock
            .find(p => p.productName === productName && p.size === size);

        if (!findProduct) {
            throw Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

        this.productStock = this.productStock.filter(p => p.productName !== productName && p.size !== size);

        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        let filterProductsBySize = this.productStock.filter(p => p.size === size);

        if (filterProductsBySize.length <= 0) {
            return 'There are no products available in that size';
        }

        let filteredProductsData = [];

        filterProductsBySize.forEach(product => {
            filteredProductsData.push(`${product.productName}-${product.quantity} pieces`);
        });

        return filteredProductsData.join(', ');
    }

    listProducts() {
        if (this.productStock.length <= 0) {
            return `${this.storehouse} storehouse is empty`;
        }

        let output = [];

        output.push(`${this.storehouse} storehouse in ${this.location} available products:`);

        this.productStock.sort((a, b) => (a.productName.localeCompare(b.productName)))
            .forEach(product => {
                output.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`);
            });

        return output.join('\n');
    }
}
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());