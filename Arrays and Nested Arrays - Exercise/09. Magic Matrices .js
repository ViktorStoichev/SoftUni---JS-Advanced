function magicMatrices(matrix) {
    
    let referenceSum = matrix[0].reduce((acc, curr) => acc + curr);
    let isEqual = true;

    function rowsSum(matrix) {
        for (let array of matrix) {
            let currentSum = array.reduce((acc, curr) => acc + curr);
            if (currentSum !== referenceSum) {
                isEqual = false;
                break;
            }
        }
    }

    rowsSum(matrix);

    function columnsSum(matrix) {
        for (let i = 0; i < matrix[0].length; i++) {
            let currentSum = 0;
            for (let array of matrix) {
                currentSum += array[i];
            }
            if (currentSum !== referenceSum) {
                isEqual = false;
                break;
            }
        }
    }

    columnsSum(matrix);

    console.log(isEqual);
}

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])