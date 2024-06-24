function heroicInventory(array) {
    let data = [];

    for (const command of array) {
        let [name, level, items] = command.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        if (name === "") {
            break;
        } else {
            data.push({name, level, items});
        }
    }

    console.log(JSON.stringify(data));
}

// function heroicInventory(data) {
//     let heroes = [];

//     data.forEach(entry => {
//         let [name, level, items] = entry.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', ') : [];

//         let hero = {
//             name: name,
//             level: level,
//             items: items
//         };

//         heroes.push(hero);
//     });

//     console.log(JSON.stringify(heroes));
// }

heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])