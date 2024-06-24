function sortBy2Criteria(array) {
    let sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    
    sorted.forEach(el => console.log(el))
}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortBy2Criteria(['test', 'Deny', 'omen', 'Default'])