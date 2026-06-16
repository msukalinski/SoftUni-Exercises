type AllFunctions<T> = {
    [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}

type test1 = {
    name: string,
    age: number,
    test: () => string;
}
type extracted1 = AllFunctions<test1>