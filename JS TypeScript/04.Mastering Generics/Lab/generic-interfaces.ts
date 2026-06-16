// export { }

interface GenericConstructor<T, V> {
    (arg: T, param: V): [T, V];
}

const generatedFn: GenericConstructor<string, string> = <T, V>(arg: T, param: V) => {
    return [arg, param];
}

const generatedFn1: GenericConstructor<string, number> = <T, V>(arg: T, param: V) => {
    return [arg, param];
}

const sample = generatedFn('Hello', 'World');
console.log(sample)
const sample1 = generatedFn1('Hello', 10);
console.log(sample1);