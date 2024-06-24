function add(num) {
    let sum = num;

    function innerAdd(nextNum) {
        sum += nextNum;
        return innerAdd;
    }

    innerAdd.toString = function() {
        return sum.toString();
    };

    return innerAdd;
}

// Example usage:
console.log(add(1));        // Output: 1
console.log(add(1)(6)(-3)); // Output: 4
console.log(add(3)(4).toString()); // Example output: "7"