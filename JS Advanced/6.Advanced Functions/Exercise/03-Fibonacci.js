// function getFibonator() {
//     let a = 0;
//     let b = 1;

//     return () => {
//         let nextNum = a + b;
//         a = b;
//         b = nextNum;
//         // console.log(a);
//         return a;
//     }
// }
// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13


function getFibonator() {
    let a = 0;
    let b = 1;

    return () => {
        let nextNum = a + b;
        a = b;
        b = nextNum;
        // console.log(a);
        return a;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13