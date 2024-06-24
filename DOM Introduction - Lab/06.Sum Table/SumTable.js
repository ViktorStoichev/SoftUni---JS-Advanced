function sumTable() {
    let prices = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
    let totalSum = 0;

    for (let currentPrice of prices) {
        totalSum += Number(currentPrice.textContent);
    }

    let sum = document.getElementById('sum');
    sum.textContent = totalSum;

}