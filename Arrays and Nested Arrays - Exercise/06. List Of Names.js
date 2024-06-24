function listOfNames(array) {
    let sorted = array.sort((a, b) => a.localeCompare(b));
    for (let num = 1; num <= sorted.length; num++) {
        console.log(`${num}.${sorted[num - 1]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])