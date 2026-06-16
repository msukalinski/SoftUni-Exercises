function demo(arr) {
    arr.sort((a, b) => a - b);
    return(arr.slice(Math.floor(arr.length / 2)));
}
// demo ([3, 19, 14, 7, 2, 19, 6]);
let res = demo ([3, 19, 14, 7, 2, 19, 6]);
console.log(res);
demo([4, 7, 2, 5])