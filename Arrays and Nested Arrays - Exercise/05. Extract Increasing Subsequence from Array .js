function nonDecreasingSubset(array) {
    let result = [];
    let currentBiggest = array[0];

    for (let num of array) {
        if (num >= currentBiggest) {
            result.push(num);
            currentBiggest = num;
        }
    }

    return result;
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])