function findBiggerHalf(array) {
    array.sort((a, b) => a - b);
    let middle = Math.floor(array.length / 2);
    let biggerHalf = array.slice(middle)
    return biggerHalf;
}

findBiggerHalf([3, 19, 14, 7, 2, 19, 6]);
findBiggerHalf([4, 7, 2, 5])