class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const findFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (findFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price: Number(price) });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const findFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (!findFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        findFlight.passengerName = passengerName;
        this.bookings.push(findFlight);
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const findBookedFlight = this.bookings.find(booked => booked.passengerName === passengerName);

        if (!findBookedFlight) {
            throw Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.filter(bookedFlight => bookedFlight.passengerName !== passengerName);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length <= 0) {
            throw Error('No bookings have been made yet.');
        }

        let outputMsg = [];

        switch (criteria) {
            case 'all': outputMsg.push(`All bookings(${this.bookingsCount}):`),
                this.bookings.forEach(bookedFlight => {
                    outputMsg.push(`${bookedFlight.passengerName} booked for flight ${bookedFlight.flightNumber}.`);
                });

                return outputMsg.join('\n');

            case 'cheap':
                const filterCheapFlights = this.bookings.filter(cheapFlight => cheapFlight.price <= 100);

                if (filterCheapFlights.length <= 0) {
                    return 'No cheap bookings found.';
                }

                outputMsg.push('Cheap bookings:');

                filterCheapFlights.forEach(cheapFlight => {
                    outputMsg.push(`${cheapFlight.passengerName} booked for flight ${cheapFlight.flightNumber}.`);
                });

                return outputMsg.join('\n');

            default:
                const filterExpensiveFlights = this.bookings.filter(expensiveFlight => expensiveFlight.price > 100);

                if (filterExpensiveFlights.length <= 0) {
                    return 'No expensive bookings found.';
                }

                outputMsg.push('Expensive bookings:');

                filterExpensiveFlights.forEach(expensiveFlight => {
                    outputMsg.push(`${expensiveFlight.passengerName} booked for flight ${expensiveFlight.flightNumber}.`);
                });

                return outputMsg.join('\n');
        }
    }
}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));