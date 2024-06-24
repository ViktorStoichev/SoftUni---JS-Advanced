function sameNumbers(number) {
    let digits = number.toString().split("");
    let firstNum = digits[0];
    let isValid = false;
    let sum = 0;
    for (let num of digits) {
        if (num === firstNum) {
            isValid = true;
        } else {
            isValid = false;
        }
        sum += Number(num);
    }

    console.log(isValid);
    console.log(sum);
}