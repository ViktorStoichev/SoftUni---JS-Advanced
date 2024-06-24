function circleArea(radius) {
    if (typeof(radius) !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    } else {
        let getCircleArea = (radius) => {
            return Math.PI * radius * radius;
        }
        console.log(getCircleArea(radius).toFixed(2));
    }
}