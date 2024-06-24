function townsToJSON(array) {
    let headings = array.shift().split("|").map(header => header.trim());
    let list = [];
    
    for (let command of array) {
        let tokens = command.split("|").map(el => el.trim());

        let obj = {};
        obj[headings[1]] = tokens[1];
        obj[headings[2]] = Number(tokens[2]).toFixed(2) * 1;
        obj[headings[3]] = Number(tokens[3]).toFixed(2) * 1;

        list.push(obj);
    }

    console.log(JSON.stringify(list));
}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])