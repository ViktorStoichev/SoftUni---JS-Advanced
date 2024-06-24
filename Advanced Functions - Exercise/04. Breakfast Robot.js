function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;
        return "Success";
    }

    function cook(recipe, quantity) {
        const requiredIngredients = recipes[recipe];
        for (let ingredient in requiredIngredients) {
            const requiredAmount = requiredIngredients[ingredient] * quantity;
            if (ingredients[ingredient] < requiredAmount) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        for (let ingredient in requiredIngredients) {
            const requiredAmount = requiredIngredients[ingredient] * quantity;
            ingredients[ingredient] -= requiredAmount;
        }
        return "Success";
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    return function (input) {
        const [command, item, quantity] = input.split(" ");
        if (command === "restock") {
            return restock(item, Number(quantity));
        } else if (command === "prepare") {
            return cook(item, Number(quantity));
        } else if (command === "report") {
            return report();
        }
    };
}

let manager = solution ();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
