function aggregateElements(array) {
    let sumElements = (array) => {
        let sum = 0;
        array.forEach(el => sum += el);
        return sum;
    }
    
    let inverseSumElements = (array) => {
        let inverseSum = 0;
        array.forEach(el => inverseSum += (1/el));
        return inverseSum;
    }

    let concatElements = (array) => {
        let concated = "";
        array.forEach(el => concated += el);
        return concated;
    }

    console.log(sumElements(array));
    console.log(inverseSumElements(array));
    console.log(concatElements(array));
}