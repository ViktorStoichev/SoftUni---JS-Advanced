function sortTickets(array, criteria) {
    let ticketsList = [];

    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    for (let command of array) {
        let [destination, price, status] = command.split('|');
        price = Number(price);
        let currTicket = new Ticket(destination, price, status);
        ticketsList.push(currTicket);
    }

    if (criteria === 'destination') {
        ticketsList.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'price') {
        ticketsList.sort((a, b) => a - b);
    } else if (criteria === 'status') {
        ticketsList.sort((a, b) => a.status.localeCompare(b.status));
    }
    
    return ticketsList;
}

sortTickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'],
    
    'price')