function argumentInfo(...info) {
    let counter = {};
    info.forEach(el => {
        if (!counter.hasOwnProperty(typeof(el))) {
            counter[typeof(el)] = 1;
        } else {
            counter[typeof(el)]++;
        }
        console.log(`${typeof(el)}: ${el}`);
    })

    Object.entries(counter).sort((a, b) => b[1] - a[1]).map(el => console.log(`${el[0]} = ${el[1]}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 'dog')