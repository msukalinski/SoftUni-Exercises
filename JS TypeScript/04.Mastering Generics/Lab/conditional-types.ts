type Age = { age: number };
type Person = { name: string, age: number };

type strOrNum = Person extends Age ? string : number;

type NameType<T> = T extends { name: unknown } ? T['name'] : T;