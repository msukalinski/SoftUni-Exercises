function autoEngineering(data) {
    let autosRegister = new Map();

    for (let autoData of data) {
        let [carBrand, carModel, quantity] = autoData.split(' | ');

        if (!autosRegister.has(carBrand)) {
            autosRegister.set(carBrand, {});
        }

        if (!autosRegister.get(carBrand).hasOwnProperty(carModel)) {
            autosRegister.get(carBrand)[carModel] = 0;
        }
        autosRegister.get(carBrand)[carModel] += Number(quantity);
    }

    for (let [carBrand, modelAndQty] of autosRegister) {
        console.log(carBrand);
        
        for (let key in modelAndQty) {
            console.log(`###${key} -> ${modelAndQty[key]}`);
        }
    }
}
autoEngineering(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);