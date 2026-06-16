// function demo(nums) {
//     const oddPositionNums = nums.filter((num, index) => index % 2 !== 0 );
//     const doubled = oddPositionNums.map(num => num * 2);
//     const reversed = doubled.reverse();
//     return reversed.join(' ');
// }
// let result = demo ([10, 15, 20, 25]);
// console.log(result);
// demo([4, 7, 2, 5])


function demo(numbers) {
    const result = numbers
    .filter((num, index) => index % 2 !== 0)
    .map(num => num * 2)
    .reverse();

    return result.join(' ');
}
console.log(demo ([10, 15, 20, 25]));