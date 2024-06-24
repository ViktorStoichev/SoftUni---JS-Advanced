function processOddPositions(array) {
    let newArray = [];
    for (let i = 1; i < array.length; i += 2) {
        newArray.push(array[i]);
    }
    newArray = newArray.map(num => num * 2).reverse();
    return newArray.join(" ");
}

// function processOddPositions(array) {
// return array.filter((a, i) => i % 2 !== 0)
// .map(x => x * 2)
// .reverse()
// .join(' ');
// }

processOddPositions([3, 0, 10, 4, 7, 3]);
processOddPositions([10, 15, 20, 25]);