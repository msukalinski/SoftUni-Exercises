function piccolo(arr) {
    let parking = new Set();
    for (const line of arr) {
        let [command, carNum] = line.split(', ')
        if (command === 'IN') {
            parking.add(carNum);
        } else if (command === 'OUT') {
            parking.delete(carNum);
        }
    }
    let parkingArr = [];
    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let car of parking) {
            parkingArr.push(car)
        }
    }
    // let sorted = parkingArr.sort((a, b) => a.);
    console.log(parkingArr.sort((a, b) => a.localeCompare(b)).join('\n'));
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI',
    'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

    // function demo(arr) {
    //     let parking = new Set;
    
    //     for (let line of arr){
    //         let [command, num] = line.split(', ');
    //         if (command === 'IN'){
    //             parking.add(num)
    //         }else if (command === 'OUT'){
    //             parking.delete(num)
    //         }
    //     }
    
    //     let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b));
        
    //     if (sorted.length === 0){
    //         console.log('Parking Lot is Empty');
    //     }else{
    //         console.log(sorted.join('\n'));
    //     }
    // }
    
    // demo(['IN, CA2844AA',
    // 'IN, CA1234TA',
    // 'OUT, CA2844AA',
    // 'OUT, CA1234TA']);
    // // demo()