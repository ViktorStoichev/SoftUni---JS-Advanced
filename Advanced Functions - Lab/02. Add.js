function solution(value) {
    return function(numberToAdd) {
        return value + numberToAdd;
    };
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));