function solve(array, theStep) {
    let nElements = [];
    for (let i = 0; i <= array.length; i += theStep) {
        nElements.push(array[i]);
    }

    return nElements;
}

solve(['5', '20', '31', '4', '20'], 2)
solve(['1', '2', '3', '4', '5'], 6 )