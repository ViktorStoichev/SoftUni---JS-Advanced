function checkEvenPositionElements(array) {
    let evenPositionElements = [];
    for (let index in array) {
        if (index % 2 === 0) {
            evenPositionElements.push(array[index]);
        }
    }

    console.log(evenPositionElements.join(" "));
}

checkEvenPositionElements(['20', '30', '40', '50', '60'])