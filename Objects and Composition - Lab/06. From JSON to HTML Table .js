function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
    };
    return text.replace(/[&<>"'/]/g, function(m) { return map[m]; });
}

function fromJSONtoHTMLtable(jsonString) {
    const data = JSON.parse(jsonString);

    const headers = Object.keys(data[0]);

    let table = '<table>\n';

    table += '  <tr>';
    headers.forEach(header => {
        table += `<th>${escapeHtml(header)}</th>`;
    });
    table += '</tr>\n';

    data.forEach(row => {
        table += '  <tr>';
        headers.forEach(header => {
            let cell = row[header];
            if (typeof cell === 'string') {
                cell = escapeHtml(cell);
            }
            table += `<td>${cell}</td>`;
        });
        table += '</tr>\n';
    });

    table += '</table>';

    console.log(table);
}

// function fromJSONtoHTMLtable(array) {
//     let converted = JSON.parse(array);
//     let keys = Object.keys(converted[0]);
//     let html = "<table>\n";
//     html += "   <tr>";
//     for (let key of keys) {
//         html += `<th>${escapeHtml(key)}</th>`;
//     }
//     html += "</tr>\n";

//     for (let obj of converted) {
//         html += "   <tr>"
//         let values = Object.values(obj);
//         for (let value of values) {
//             html += `<td>${escapeHtml(value)}</td>`;
//         }
//         html += "</tr>\n";
//     }
//     html += "</table>"
//     console.log(html);
// }

fromJSONtoHTMLtable(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`)

fromJSONtoHTMLtable(`[{"Name":"Stamat", "Score":5.5},
{"Name":"Rumen", "Score":6}]` )