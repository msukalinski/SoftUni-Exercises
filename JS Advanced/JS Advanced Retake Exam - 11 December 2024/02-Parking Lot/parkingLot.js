class ParkingLot {
    constructor(totalSpaces, hourlyRate) {
        this.totalSpaces = totalSpaces;
        this.hourlyRate = hourlyRate;
        this.availableSpaces = totalSpaces;
        this.parkedVehicles = [];
        this.revenue = 0;
    }

    parkVehicle(licensePlate) {
        if (this.availableSpaces === 0) {
            return "The parking lot is full. No available spaces.";
        }

        if (this.parkedVehicles.includes(licensePlate)) {
            return `Vehicle with license plate ${licensePlate} is already parked.`;
        }

        this.parkedVehicles.push(licensePlate);
        this.availableSpaces -= 1;
        return `Vehicle with license plate ${licensePlate} parked successfully.`;
    }

    unparkVehicle(licensePlate, hoursParked) {
        const index = this.parkedVehicles.indexOf(licensePlate);
        if (index === -1) {
            return `No vehicle found with license plate ${licensePlate}.`;
        }

        const parkingFee = hoursParked * this.hourlyRate;

        this.parkedVehicles.splice(index, 1);
        this.availableSpaces += 1;
        this.revenue += parkingFee;

        return `Vehicle with license plate ${licensePlate} has been unparked. Parking fee: $${parkingFee}. Duration: ${hoursParked} hours.`;
    }

    showAvailableSpaces() {
        return `Available parking spaces: ${this.availableSpaces} out of ${this.totalSpaces}.`;
    }

    listParkedVehicles() {
        if (this.parkedVehicles.length === 0) {
            return "No vehicles currently parked.";
        }

        let vehiclesList = "Currently parked vehicles:\n";
        this.parkedVehicles.forEach(licensePlate => {
            vehiclesList += `A vehicle with registration number ${licensePlate} is in the parking lot.\n`;
        });
        return vehiclesList.trim();
    }

    getTotalRevenue() {
        return `Total revenue earned from parking fees: $${this.revenue.toFixed(2)}`;
    }
}

const parkingLot = new ParkingLot(3, 5);  
console.log(parkingLot.parkVehicle("ABC123"));
console.log(parkingLot.parkVehicle("XYZ789"));
console.log(parkingLot.unparkVehicle("ABC123", 4));
console.log(parkingLot.unparkVehicle("BBC123", 14));

