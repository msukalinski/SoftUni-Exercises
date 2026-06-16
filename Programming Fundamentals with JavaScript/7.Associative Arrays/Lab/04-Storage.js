function storageList (arr){
    let list = new Map();
    for (const line of arr){
        let [item, qty] = line.split(' ');
        qty = Number(qty);
        if (list.has(item)){
            qty += list.get(item);
        }
        list.set (item, qty);
    }
    for (const [item, qty] of list) {
        console.log(`${item} -> ${qty}`);
    }
}
storageList (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])