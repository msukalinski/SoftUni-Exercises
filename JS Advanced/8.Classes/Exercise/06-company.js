class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let args = [name, salary, position, department];

        if (args.some(arg => arg === '' || arg === undefined || arg === null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];

        }
        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let departmentsReg = this.departments;
        let bestDepartment = { avgSalary: 0 };
        let curAvg = 0;

        for (let key in departmentsReg) {
            let curDepartSalary = 0;

            for (let name in departmentsReg[key]) {
                curDepartSalary += Number(departmentsReg[key][name].salary);
            }
            curAvg = curDepartSalary / departmentsReg[key].length;

            if (curAvg > bestDepartment.avgSalary) {
                bestDepartment.name = key;
                bestDepartment.avgSalary = curAvg.toFixed(2);
            }
        }
        let output = [];
        output.push(`Best Department is: ${bestDepartment.name}`, `Average salary: ${bestDepartment.avgSalary}`);

        let bestDeptEmployees = departmentsReg[bestDepartment.name].sort((a, b) => {
            if (b.salary === a.salary) {
                return a.name.localeCompare(b.name);
            }

            return b.salary - a.salary;
        });

        for (let employee of bestDeptEmployees) {
            output.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }
        
        return output.join('\n');
    }
}
let c = new Company();
c.addEmployee('Stanimir', 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());