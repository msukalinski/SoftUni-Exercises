function orders(product, quantity) {
    if (product === 'coffee') {
        return (quantity * 1.5).toFixed(2);
    } else if (product === 'water') {
        return (quantity * 1).toFixed(2);
    } else if (product === 'coke') {
        return (quantity * 1.4).toFixed(2);
    } else if (product === 'snacks') {
        return (quantity * 2).toFixed(2);
    }
}
let result = orders("coffee", 2);
console.log(result);

// function demo(product, qty) {
//     let price = prodPrice(product);
//     let result = res(price, qty);
//     return printPrice(result);

//     function prodPrice(product) {
//         if (product == 'coffee') {
//             return 1.5;
//         } else if (product == 'water') {
//             return 1;
//         } else if (product == 'coke') {
//             return 1.4;
//         } else if (product == 'snacks') {
//             return 2;
//         }
//     }

//     function res(price, qty) {
//         return price * qty;
//     }

//     function printPrice(price) {
//         return price.toFixed(2);
//     }
// }
// let result = demo("water", 5);
// console.log(result);