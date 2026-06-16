// function smallestNum(first, second, third) {
//     console.log(Math.min(first, second, third));
// }
// smallestNum (600, 342, 123)

function smallestNum(first, second, third) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    for (const n of arguments) {
        getSmaller(n);
    }
    function getSmaller(n) {
        if (n < smallestNumber) {
            smallestNumber = n;
        }
    }
    return smallestNumber;
}
let result = smallestNum(1, 2, 3);
console.log(result);