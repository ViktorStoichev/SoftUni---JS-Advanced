function cookingByNumbers(numberStr, ...commands) {
    let number = Number(numberStr);
    for (let currCommand of commands) {
        switch (currCommand) {
            case "chop": number /= 2; console.log(number); break;
            case "dice": number = Math.sqrt(number); console.log(number); break;
            case "spice": number += 1; console.log(number); break;
            case "bake": number *= 3; console.log(number); break;
            case "fillet": number -= (number * 20) / 100; console.log(number); break;
        }
    }
}