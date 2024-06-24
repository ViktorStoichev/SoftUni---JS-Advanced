function rotateArray(array, rotationsCount) {
    for (let rotation = 1; rotation <= rotationsCount; rotation++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(" "));
}

rotateArray(['1',

'2',

'3',

'4'],

2)
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15 )