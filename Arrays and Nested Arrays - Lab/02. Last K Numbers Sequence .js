function lastKNumbers(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - k; j <= i; j++) {
            if (Number.isInteger(sequence[j])) {
                sum += sequence[j];
            }
        }

        sequence.push(sum);
    }

    return sequence;
}

lastKNumbers(6, 3);
lastKNumbers(8, 2);
