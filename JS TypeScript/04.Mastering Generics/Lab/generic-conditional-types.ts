export { };

type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;
type B = IsString<number>;