function sumNumbers(start, end) {
    let sum = 0;
    for (let num = Number(start); num <= Number(end); num++) {
        sum += num;
    }
    console.log(sum);
}