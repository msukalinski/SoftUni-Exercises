// function matrix (n){
//     function printLine (n){
//         let line = '';
//         for (let i = 0; i < n; i++){
//             line += n + ' ';
//         }
//         return line;
//     }
//     let result = printLine (n)
//     for (let index = 0; index < n; index++){
//         console.log(result);
//     }
// }
// matrix (7)

function matrix (n){
    for (let rowNum = 0; rowNum < n; rowNum++){
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}
matrix (7)
