type Choose<T, K extends keyof T> = {
    [key in K]: T[key];
}

type test = {
    name: string,
    age: number,
    test: () => string;
}
type extracted = Choose<test, 'name' | 'age' | 'test'>