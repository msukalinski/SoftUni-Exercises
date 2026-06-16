class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        for (let bikeData of bikes) {
            let [brand, quantity, price] = bikeData.split('-');
            quantity = Number(quantity);
            price = Number(price);

            let sameBrandFound = this.availableBikes.find(b => b.brand === brand);

            if (sameBrandFound) {
                sameBrandFound.quantity += quantity;
                sameBrandFound.price = Math.max(sameBrandFound.price, price);
                continue;
            }
            this.availableBikes.push({ brand, quantity, price });
        }
        let addedBrands = [];

        this.availableBikes.forEach((bike) => addedBrands.push(bike.brand));

        return `Successfully added ${addedBrands.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;

        for (let bikeData of selectedBikes) {
            let curBikesCost = 0;
            let [brand, quantity] = bikeData.split('-');

            quantity = Number(quantity);

            let bikeFound = this.availableBikes.find(b => b.brand === brand);

            if (!bikeFound || bikeFound.quantity < quantity) {
                return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
            }

            bikeFound.quantity -= quantity;
            curBikesCost = bikeFound.price * quantity;
            totalPrice += curBikesCost;
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    returnBikes(returnedBikes) {
        for (let bikeData of returnedBikes) {
            let [brand, quantity] = bikeData.split('-');
            quantity = Number(quantity);

            let bikeFound = this.availableBikes.find(b => b.brand === brand);

            if (!bikeFound) {
                return 'Some of the returned bikes are not from our selection.';
            }

            bikeFound.quantity += quantity;
        }

        return 'Thank you for returning!';
    }

    revision() {
        let bikesAvailable = [];
        bikesAvailable.push('Available bikes:');

        this.availableBikes
            .sort((a, b) => a.price - b.price)
            .forEach(bike => {
                bikesAvailable.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
            });

        bikesAvailable.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

        return bikesAvailable.join('\n');
    }
}
const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());