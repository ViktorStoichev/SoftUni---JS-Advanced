function squareOfStars(count) {
    if (typeof count === "number") {
        for (let num = 1; num <= count; num++) {
            console.log("* ".repeat(count));
        }
    } else {
        for (let num = 1; num <= 5; num++) {
            console.log("* ".repeat(5));
        }
    }
}