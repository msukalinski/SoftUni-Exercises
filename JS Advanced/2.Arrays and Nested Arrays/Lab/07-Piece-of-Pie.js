// /**
//  * 
//  * @param {Array} arr 
//  * @param {String} startStr 
//  * @param {String} endStr 
//  * @returns 
//  */


function demo(arr, startStr, endStr) {
    let startIdx = arr.indexOf(startStr);
    let endIdx = arr.indexOf(endStr);
    let result = arr.slice(startIdx, endIdx + 1)
    return result;
}
let result = demo (['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');
console.log(result);
demo([4, 7, 2, 5])



// function demo(arr, startStr, endStr) {
//     let result = [];
//     let startIdx = arr.indexOf(startStr);
//     let endIdx = arr.indexOf(endStr);
//     for (let index = startIdx; index <= endIdx; index++){
//         result.push(arr[index]);
//     }
//     return result;
// }
// let result = demo (['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie');
// console.log(result);
// demo([4, 7, 2, 5])