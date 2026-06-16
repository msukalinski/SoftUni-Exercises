function demo(arr) {
    return arr.reduce((result, current) => {
        if (result.length === 0 || current >= result[result.length - 1]){
            result.push(current);
        }
        return(result);
    }, []);
}
let result = demo([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log(result);
demo([1, 3, 8, 4, 10, 12, 3, 2, 24]);


// function demo(arr) {
//     let res = [];

//     for (let num of arr){
//         if (res.length === 0 || num >= res[res.length - 1]){
//             res.push(num);
//         }
//     }
//     // console.log(res);
//     return res;
// }
// demo([1, 3, 8, 4, 10, 12, 3, 2, 24]);