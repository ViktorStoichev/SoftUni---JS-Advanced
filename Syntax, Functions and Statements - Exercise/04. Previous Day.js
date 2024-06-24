function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    let currYear = date.getFullYear();
    let currMonth = date.getMonth() + 1;
    let currDay = date.getDate();
    console.log(`${currYear}-${currMonth}-${currDay}`);
}