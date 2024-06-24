class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let validCheck = [name, salary, position, department];
        if(validCheck.includes(undefined) || validCheck.includes(null) || validCheck.includes('')) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push([name, salary, position]);
            this.departments[department][0] += salary;
            this.departments[department][1]++;
        } else {
            this.departments[department] = [salary, 1];
            this.departments[department].push([name, salary, position]);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let max = Number.MIN_SAFE_INTEGER;
        let best;
        let data = [];
        let result = '';
        for (let department in this.departments) {
            if (this.departments[department][0] / this.departments[department][1] > max) {
                max = this.departments[department][0] / this.departments[department][1];
                best = department;
                for (let index = 2; index < this.departments[department].length; index++) {
                    data.push(this.departments[department][index]);
                }
            }
        }
        result += `Best Department is: ${best}\n`;
        result += `Average salary: ${(max).toFixed(2)}\n`;
        data.sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];
        });
        
        for (let i = 0; i < data.length; i++) {
            if (i === data.length - 1) {
                result += `${data[i].join(" ")}`
            } else {
                result += `${data[i].join(" ")}\n`
            }
        }
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// c.departments['Construction'].forEach(n => console.log(n))