function findEqualNeighbors(arrays) {
    let equalNeighborsCount = 0;
    for (let arrIndex = 0; arrIndex < arrays.length - 1; arrIndex++) {
        for (let element = 0; element < arrays[arrIndex].length; element++) {
            if (arrays[arrIndex][element] === arrays[arrIndex + 1][element]) {
                equalNeighborsCount++;
            }
        }
    }

    for (let arrIndex = 0; arrIndex < arrays.length; arrIndex++) {
        for (let element = 0; element < arrays[arrIndex].length; element++) {
            if (arrays[arrIndex][element] === arrays[arrIndex][element + 1]) {
                equalNeighborsCount++;
            }
        }
    }

    console.log(equalNeighborsCount);
}

findEqualNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

findEqualNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);

findEqualNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])