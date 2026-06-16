function multiplicator (a?: number | string, b?: number | string, c?: number | string): number {
    let realValues = [a, b, c]
    .filter(val => val !== undefined)
    .map(Number);

    if (realValues.length === 0) {
        return 1;
    }

    return realValues.reduce((acc, val) => acc * val);

    // let result = 1;
    // let arr = [a, b, c];

    // for (let arg of arr) {
    //     if (arg !== undefined) {
    //         result *= Number(arg);
    //     }
    // }

    // return result;
}

console.log(multiplicator ('5', '3'));
console.log(multiplicator ('5', '3', '2'));
console.log(multiplicator ('5', '3', 2));
console.log(multiplicator (undefined, undefined, undefined));