function demo(arr) {
    let count = Number(arr.shift());
    let list = {};
    for (let index = 0; index < count; index++) {
        let tokens = arr.shift();
        let [car, distance, fuel] = tokens.split('|');
        distance = Number(distance);
        fuel = Number(fuel);
        list[car] = { distance, fuel };
    }
    let commands = arr.shift();

    while (commands !== 'Stop') {
        let [command, ...args] = commands.split(' : ');

        if (command === 'Drive') {
            let [car, distance, fuel] = args;
            distance = Number(distance);
            fuel = Number(fuel);
            if (list[car]) {
                if (list[car].fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    list[car].distance += distance;
                    list[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
            }
            if (list[car].distance >= 100000) {
                delete list[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (command === 'Refuel') {
            let [car, fuel] = args;
            fuel = Number(fuel);
            if (list[car]) {
                // list[car].fuel += fuel
                if (list[car].fuel + fuel > 75) {
                    let diff = 75 - list[car].fuel;
                    list[car].fuel += diff;
                    console.log(`${car} refueled with ${diff} liters`);
                } else if (list[car].fuel + fuel <= 75){
                    list[car].fuel += fuel
                    console.log(`${car} refueled with ${fuel} liters`);
                }
            }
        } else if (command === 'Revert') {
            let [car, distance] = args;
            distance = Number(distance);
            if (list[car]){
                list[car].distance -= distance;
                if (list[car].distance < 10000){
                    list[car].distance = 10000;
                }else{
                    console.log(`${car} mileage decreased by ${distance} kilometers`);
                }
            }
        }
        commands = arr.shift();
    }
    for (const car in list){
        console.log(`${car} -> Mileage: ${list[car].distance} kms, Fuel in the tank: ${list[car].fuel} lt.`);
    }
}
demo([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );
// demo([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ]
//   )