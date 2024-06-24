function carsObject(array) {
    let objects = {};
    for (let el of array) {
        let tokens = el.split(" ");

        if (tokens[0] === 'create' && tokens.length < 3) {
            objects[tokens[1]] = {};
        } else if (tokens[0] === 'create' && tokens.length > 3) {
            objects[tokens[1]] = Object.create(objects[tokens[3]]);
        } else if (tokens[0] === 'set') {
            objects[tokens[1]][tokens[2]] = tokens[3];
        } else if (tokens[0] = 'print') {
            let currentObj = objects[tokens[1]];
            let result = [];
            while (currentObj) {
                for (let key in currentObj) {
                    if (currentObj.hasOwnProperty(key)) {
                        result.push(`${key}:${currentObj[key]}`);
                    }
                }
                currentObj = Object.getPrototypeOf(currentObj);
            }
            console.log(result.join(','));
        }
    }
}

carsObject(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);