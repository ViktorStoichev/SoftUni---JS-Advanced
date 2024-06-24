let library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },

    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },

    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

let orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },

    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },

    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },

    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

let products = factory(library, orders);
console.log(products);

function factory(library, orders) {
    let newObjList = [];

    for (let order of orders) {
        let obj = {};
        obj.name = order.template.name;
        // for (let part of order.parts) {
        //     if (part === "print") {
        //         obj.print = library["print"];
        //     } else if (part === "scan") {
        //         obj.scan = library["scan"];
        //     } else if (part === "play") {
        //         obj.play = library["play"];
        //     }
        // }
        for (let part of order.parts) {
            obj[part] = library[part];
        }

        newObjList.push(obj);
    }

    return newObjList;
}