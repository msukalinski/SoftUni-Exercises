// function demo(n, k) {
//     let result = [1];

//     for (let index = 1; index < n; index++){
//         let i = Math.max(result.length - k, 0);
//         let lastElements = result.slice(i);
//         let sum = 0;
//         for (let el of lastElements){
//             sum += el;
//         }
//         result.push(sum);
//     }
//     return(result);
// }

function demo(n, k) {
    let result = [1];

    for (let index = 1; index < n; index++) {
        let sum = result
        .slice(-k)
        .reduce((sum, current) => sum += current);
        
        result.push(sum);
    }
    
    return (result);
}

console.log(demo(6, 3))
console.log(demo(8, 2))