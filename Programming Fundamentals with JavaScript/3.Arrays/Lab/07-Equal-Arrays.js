function arrEqual(arr1, arr2) {
    let areEqual = true;
    for (let index = 0; index < arr1.length; index++) {
        arr1[index] = Number(arr1[index]);
    }
    for (let index = 0; index < arr2.length; index++) {
        arr2[index] = Number(arr2[index]);
    }
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        let sum = 0;
        for (let index = 0; index < arr1.length; index++) {
            sum += arr1[index];
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
arrEqual(['10', '20', '30'], ['10', '20', '30']);

// function demo(arr1, arr2) {
//     let areEqual = true;
//     for (let index = 0; index < arr1.length; index++){
//         let num1 = Number(arr1[index]);
//         let num2 = Number(arr2[index]);

//         if (num1 !== num2){
//             console.log(`Arrays are not identical. Found difference at ${index} index`);
//             areEqual = false;
//             break;
//         }
//     }
//     if (areEqual){
//         let sum = 0;
//         arr1.forEach(num => {
//             num = Number(num);
//             sum += num;
//         });
//         console.log(`Arrays are identical. Sum: ${sum}`);
//     }
// }
// demo(['10','20','30'], ['10','20','30'])
// demo(['1','2','3','4','5'], ['1','2','4','4','5'])
// demo([1], [10])