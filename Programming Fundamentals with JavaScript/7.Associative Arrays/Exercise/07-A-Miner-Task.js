function minerTask (arr){
    let items = {};
    for (let i = 0; i < arr.length; i += 2){
        let item = arr[i];
        let qty = Number(arr[i + 1]);
        if (items[item]){
            items[item] += qty;
        }else{
            items[item] = qty;
        }
    }
    for (const [item, qty] of Object.entries(items)){
        console.log(`${item} -> ${qty}`);
    }
}
minerTask (['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])

// function demo(arr) {
//     let items = new Map();

//     for (let index = 0; index < arr.length; index += 2) {
//         let item = arr[index];
//         let qty = Number(arr[index + 1]);
        
//         if (items.has(item)){
//             items.set(item, items.get(item) + qty);
//         }else{
//             items.set(item, qty);
//         }
//     }
//     for (let [item, qty] of items){
//         console.log(`${item} -> ${qty}`);
//     }
// }

// demo(['Gold', '155',
//     'Silver', '10',
//     'Copper', '17',
//     'Gold', '15']);
// // demo()