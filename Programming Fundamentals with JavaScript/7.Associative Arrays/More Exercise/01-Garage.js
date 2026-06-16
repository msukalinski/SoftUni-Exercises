function demo(arr) {
    let garages = new Map();

    for (let entry of arr) {
        let [garageNumber, info] = entry.split(' - ');
        
        if (!garages.has(garageNumber)){
            garages.set(garageNumber, []);
        }
        garages.get(garageNumber).push(info);
    }

    for (const [garage, cars] of garages){
        console.log(`Garage № ${garage}`);
        cars.forEach(car => {
            const formattedCars = car.replace(/: /g, ' - ');
            console.log(`--- ${formattedCars}`);
        });
    }
}

demo(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
// demo('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')