function juiceFlavors(data) {
    let juiceFlavorsStorage = new Map();
    let juiceBottles = new Map();

    for (let juiceData of data) {
        let [juiceName, flavorsQty] = juiceData.split(' => ');

        if (!juiceFlavorsStorage.has(juiceName)) {
            juiceFlavorsStorage.set(juiceName, 0);
        }
        juiceFlavorsStorage.set(juiceName, juiceFlavorsStorage.get(juiceName) + Number(flavorsQty));

        if (juiceFlavorsStorage.get(juiceName) >= 1000) {
            juiceBottles.set(juiceName, Math.floor(juiceFlavorsStorage.get(juiceName) / 1000));
        }
    }
    
    for (let [juiceName, bottleQty] of juiceBottles) {
        console.log(`${juiceName} => ${bottleQty}`);
    }
}
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);