function sortArray(array, order) {
    let sorted;
    if (order === 'asc') {
        sorted = array.sort((a, b) => a - b);
    } else if (order === 'desc') {
        sorted = array.sort((a, b) => b - a);
    }

    return sorted;
}

sortArray([14, 7, 17, 6, 8], 'desc')