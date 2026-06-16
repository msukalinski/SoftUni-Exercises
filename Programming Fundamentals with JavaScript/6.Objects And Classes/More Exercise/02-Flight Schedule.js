function demo(arr) {
    // const allFlights = arr.shift();
    // const updatedStatuses = arr.shift();
    // const statusToCheck = arr.shift().join('');

    const [allFlights, updatedStatuses, [statusToCheck]] = arr;

    const flights = [];

    for (const info of allFlights) {
        const [flightNumber, ...args] = info.split(' ');

        let destination = args.join(' ');

        flightObj = { 
            flightNumber: flightNumber, 
            destination: destination, 
            status: 'Ready to fly' };
        flights.push(flightObj);
        // flights[flightNumber] = { destination: destination, status: 'Ready to fly' };
    }

    for (const info of updatedStatuses) {
        const [flightNum, newStatus] = info.split(' ');
        const flight = flights.find(i => i.flightNumber === flightNum);
        if (flight) {
            flight.status = newStatus;
        }
    }

    for (let flight of flights) {


        if (statusToCheck === flight.status) {
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        }
    }

    // console.log(flights);
}

demo([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama',
        'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
    ['Ready to fly']
])

demo([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama',
    'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']])