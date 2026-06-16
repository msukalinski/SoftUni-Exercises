// export { };

const takeLast = <T>(array: T[]) => {
    return array.pop();
}

// const sample = takeLast(['Hello', 'World', 'TypeScript']);
const secondSample = takeLast([1, 2, 3, 4]);
// console.log(sample, secondSample);

const makeTuple = <T, V>(a: T, b: V) => {
    return [a, b];
}

const firstTuple = makeTuple(1, 2);
const secondTuple = makeTuple('asd', 'dfsasd');
const thirdTuple = makeTuple(1, 'asdasd');

console.log(firstTuple);
console.log(secondTuple);
console.log(thirdTuple);