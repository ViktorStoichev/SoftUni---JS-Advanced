function listProcessor(arrayCommands) {
    let list = [];

    let solve =  function () {
        for (let el of arrayCommands) {
            if (el !== 'print') {
                let [command, string] = el.split(" ");

                if (command === 'add') {
                    list.push(string);
                } else if (command === 'remove') {
                    while (list.includes(string)) {
                        list.splice(list.indexOf(string), 1);
                    }
                }
            } else {
                console.log(list.join(','));
            }
        }
    }

    solve();
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])