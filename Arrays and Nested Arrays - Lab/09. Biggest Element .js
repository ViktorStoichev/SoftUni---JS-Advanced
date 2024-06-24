function biggestElement(array) {
    let biggestElementsPerArray = [];

    for (let listOfNumbers of array) {
        biggestElementsPerArray.push(Math.max(...listOfNumbers));
    }

    console.log(Math.max(...biggestElementsPerArray));
}

biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
biggestElement([[20, 50, 10], [8, 33, 145]])