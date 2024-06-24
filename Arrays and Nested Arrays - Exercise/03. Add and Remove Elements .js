function addAndRemove(array) {
    let numbers = [];
    for (let num = 1; num <= array.length; num++) {
        if (array[num - 1] === "add") {
            numbers.push(num);
        } else if (array[num - 1] === "remove") {
            numbers.pop();
        }
    }

    if (numbers.length < 1) {
        console.log("Empty");
    } else {
        numbers.forEach(num => console.log(num));
    }
}

addAndRemove(['add',

    'add',

    'add',

    'add'])

addAndRemove(['add', 'add', 'remove', 'add', 'add'] )
addAndRemove(['remove', 'remove', 'remove'] )