function sumNumbers(a: number, b: number, c: number) {
    const res = (a + b + c) % 2 === 0 ? true : false;
    return res;
}

console.log(sumNumbers (1, 2, 3));
console.log(sumNumbers (2, 2, 3));