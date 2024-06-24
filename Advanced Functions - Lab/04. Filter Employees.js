function filterEmployees(employeeData, criteriaData) {
    employeeData = JSON.parse(employeeData);
    if (criteriaData !== 'all') {
        const [type, criteria] = criteriaData.split('-');
        let count = -1;

        for (let obj of employeeData) {
            if (obj[type] === criteria) {
                count++;
                console.log(`${count}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);
            }
        }
 
    } else {

        let count = -1;
        for (let obj of employeeData) {
                count++;
                console.log(`${count}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);
        }
    }

}

filterEmployees(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Johnson",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "3","first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'all')