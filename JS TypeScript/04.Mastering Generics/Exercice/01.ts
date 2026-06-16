function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number) {
    const temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;

    // let el1 = a[aIndex];
    // let el2 = b[bIndex];

    // a.splice(aIndex, 1, el2)
    // b.splice(bIndex, 1, el1);
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap<string>(a, 0, b, 2);
console.log(a);
console.log(b);