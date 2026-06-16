class Product {
    private static productCount = 0;
    readonly id: number;

    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        Product.productCount++;
        this.id = Product.productCount;
        this.name = name;
        this.price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(val: string) {
        if (!val || val.length < 1) {
            throw new Error('Product name must be at least 1 character long.');
        }
        this._name = val;
    }

    get price(): number {
        return this._price;
    }

    set price(val: number) {
        if (val <= 0) {
            throw new Error('Price must be greater than 0.');
        }
        this._price = val;
    }

    // private validateName(val: string): string {
    //     const trimmed = val.trim();

    //     if (trimmed.length < 1) {
    //         throw new Error('Name must be at least 1 character long');
    //     }
    //     return trimmed;
    // }

    // private validatePrice(val: number): number {
    //     if (Number(val) <= 0) {
    //         throw new Error('Price must be bigger than 0');
    //     }
    //     return val;
    // }

    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }

    static getProductCount(): number {
        return Product.productCount;
    }
}

class Inventory {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public listProducts(): string {
        let result = this.products.map(p => p.getDetails()).join('\n');
        // let result: string[] = [];
        // this.products.forEach(val => result.push(val.getDetails()));
        // result.push(`Total products created: ${this.products.length}`);
        // return result.join('\n');

        result += `\nTotal products created: ${Product.getProductCount()}`;
        return result;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);


inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());