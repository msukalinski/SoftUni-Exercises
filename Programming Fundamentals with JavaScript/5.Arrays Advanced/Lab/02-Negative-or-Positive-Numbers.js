function arrDeffinition (arr){
    let finalArr = [];
    for (let elements of arr){
        elements = Number (elements);
        if (elements < 0){
            finalArr.unshift(elements);
        }else {
            finalArr.push(elements);
        }
    }
    for (let nums of finalArr){
        console.log(nums);
    }
}
arrDeffinition (['7', '-2', '8', '9'])


// function demo(arr) {
//     let result = [];

//     for (let element of arr){
//         element = Number(element);
//         if (element < 0){
//             result.unshift(element);
//         }else{
//             result.push(element)
//         }
//     }
//     console.log(result.join('\n'));
// }
// demo(['7', '-2', '8', '9']);
// demo(['3', '-2', '0', '-1']);