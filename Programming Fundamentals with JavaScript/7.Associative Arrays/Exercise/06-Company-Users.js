function companyUsers (arr){
    const companies = {};
    for (const line of arr){
        let [company, employeeId] = line.split(' -> ');
        if (company in companies){
            if (!companies[company].includes(employeeId)){
                companies[company].push(employeeId);
            }
        }else{
            companies[company] = [employeeId];
        }
    }
    let entries = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [company, employees] of entries){
        console.log(company);
        for (const employee of employees){
            console.log(`-- ${employee}`);
        }
    }
    // const sorted = Object.keys(companies).sort();
    // for (const company of sorted){
    //     console.log(company);
        // for (const id of Object.values(companies).sort()){
        //     console.log(`-- ${id}`);
        // }
    // }
}
companyUsers (['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])