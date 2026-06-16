function tickets(data, sortCriteria) {
    const sortCriterion = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    }

    let ticketList = [];

    for (let ticketData of data) {
        let [destination, price, status] = ticketData.split('|');

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status;
            }
        }
        ticketList.push(new Ticket(destination, price, status));
    }
    ticketList.sort(sortCriterion[sortCriteria]);

    return ticketList;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');