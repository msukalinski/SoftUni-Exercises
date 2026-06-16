function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    return (commands) => {
        let [command, product, qty] = commands.split(' ');

        if (command === 'restock'){
            stock[product] += Number(qty);
            return 'Success';
        }else if (command === 'prepare'){
            let recipe = recipes[product];

            for (let item in recipe){
                if (stock[item] < recipe[item] * Number(qty)){
                    return `Error: not enough ${item} in stock`;
                }
            }
            for (let item in recipe){
                stock[item] -= recipe[item] * Number(qty);
            };
            return 'Success';
        }else if (command === 'report'){
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock