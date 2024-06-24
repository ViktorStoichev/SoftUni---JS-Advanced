function sortingNumbers(array) {
    let sorted = array.sort((a, b) => a - b);
    let newArray = [];
    let count = Math.round(sorted.length / 2);
    for (let num = 1; num <= count; num++) {
        newArray.push(sorted.shift());
        newArray.push(sorted.pop());
    }

    return newArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])