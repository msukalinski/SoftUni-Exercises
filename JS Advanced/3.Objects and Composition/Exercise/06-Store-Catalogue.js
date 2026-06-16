function demo(arr) {
    let res = {};
    const pattern = /[A-Z]/g;
    for (const line of arr){
        let [name, price] = line.split(' : ');
        let firstLetter = name.match(pattern)[0];
        
        if (!res[firstLetter]){
            res[firstLetter] = {};
        }
        res[firstLetter][name] = price;
    }
    
    // let sorted = Object.keys(res).sort().
    // reduce((acc, key) => {
    //     acc[key] = res[key];
    //     return acc;
    // }, {});
    // console.log(sorted);
    
    let sorted = Object.fromEntries(
        Object.entries(res).sort(([a], [b]) => a.localeCompare(b)));
    for (const [firstLetter, products] of Object.entries(sorted)){
        console.log(firstLetter);
        let sortedProducts = Object.fromEntries(
            Object.entries(products).sort(([a], [b]) => a.localeCompare(b))
        );
        for (const [product, price] of Object.entries(sortedProducts)){
            console.log(`  ${product}: ${price}`);
        }
    }
}
demo(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25',
    'Anti-Bug Spray : 15', 'T-Shirt : 10'])