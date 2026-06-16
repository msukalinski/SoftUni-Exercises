function employeesList (arr){
    for (let employeeName of arr){
        let obj = {
            name: employeeName,
            personalNum: employeeName.length,
        }
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNum}`);
    }
}
employeesList (['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);



// function demo(arr) {
//     let info = {};

//     for (let name of arr){
//         info[name] = name.length;
//     }

//     for (let [key, value] of Object.entries(info)){
//         console.log(`Name: ${key} -- Personal Number: ${value}`);
//     }
// }
// demo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// // demo()