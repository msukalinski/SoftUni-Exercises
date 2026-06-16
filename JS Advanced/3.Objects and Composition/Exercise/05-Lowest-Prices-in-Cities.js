function demo(arr) {
    const result = {};

    for (const line of arr) {
        let [city, product, price] = line.split(' | ');
        price = Number(price);
        if (!result[product]) {
            result[product] = {};
        }
        result[product][city] = price;
    }
    for (const [product, cities] of Object.entries(result)) {
        const sorted = Object.entries(cities).sort(
            (a, b) => a[1] - b[1]
        );
        const [city, price] = sorted[0];
        console.log(`${product} -> ${price} (${city})`);
    }
}
demo(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])