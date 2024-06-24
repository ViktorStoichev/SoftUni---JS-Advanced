function GCD(first, second) {
    let larger = Math.max(first, second);
    let greatestDivisor = 0;
    for (let divisor = 1; divisor <= larger; divisor++) {
        if (first % divisor === 0 && second % divisor === 0) {
            greatestDivisor = divisor;
        }
    }

    console.log(greatestDivisor);
}