function negativePositiveNumbers(array) {
    let sorted = [];
    for (let number of array) {
        if (number < 0) {
            sorted.unshift(number);
        } else {
            sorted.push(number);
        }
    }

    sorted.forEach(num => console.log(num));
}

negativePositiveNumbers([7, -2, 8, 9]);