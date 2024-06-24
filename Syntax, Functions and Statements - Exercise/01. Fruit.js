function solve(fruit, grams, pricePerKg) {
    let moneyNeeded = pricePerKg * (grams / 1000);
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}