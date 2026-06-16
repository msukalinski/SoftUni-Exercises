type User = {
    firstName: string;
    lastName: string;
    age?: number;
}

type Address = {
    country: string;
    city: string;
    postCode?: number;
}

type Person = User & Address;

const user1: User = {
    firstName: 'Peter',
    lastName: 'Johnson',
    age: 23,
}

const user2: User = {
    firstName: 'John',
    lastName: 'Wick',
    age: 32
}

const address1: Address = {
    country: 'Spain',
    city: 'Madrid',
    postCode: 21452,
}

const person1: Person = {
    firstName: 'George',
    lastName: 'Patton',
    age: 34,
    country: 'USA',
    city: 'Jackson',
    postCode: 32012,
}

// keyof Operator

type Colors = { red: string; blue: string };
type ColorKeys = keyof Colors; // 'red' | 'blue';

type Point = { x: number, y: number };
type PointsKey = keyof Point;

function getValue(point: Point, key: PointsKey) {
    return point[key];
}

console.log(getValue({ x: 5, y: 2 }, 'x'));

// in Operator

function printCity(arg: User | Person) {
    if ('city' in arg) {
        console.log(arg.city);
    }
}

printCity(user1); //it doesn't log anything because user1 doesn't have property city
printCity(person1); //it logs the property city because person1 has the property city

type A = { name: string };
type B = { age: number };

let val: A | B = {
    name: 'George',
    age: 29
};

if ('age' in val) {
    console.log(val.age);
}

// typeof Operator

let point1: Point = { x: 12, y: 29 };
type Point2 = typeof point1;

let point2: Point2 = { x: 1, y: 2 };

// as const Operator

const person = { name: 'Alice', age: 25 }; //it is defined as const but if try to change some properties inside the object it will let you do it and if we don't want that we use 'as const'

person.age = 30;

console.log(person);

const person2 = { name: 'Peter', age: 23 } as const;

// person2.age = 30;

// satisfies Operator

const extraUser = { firstName: 'Landon', lastName: 'Crown', id: 5 };

const user3 = extraUser satisfies User;

console.log(user3);

// mapped types

type Point3 = { x: number; y: number; z: number };

const point3: Point3 = {
    x: 5,
    y: 10,
    z: -3
}

type OptionalPoint = {
    [key in keyof Point3]?: Point3[key];
}

// recursive types

type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

let root: TreeNode = {
    value: 20,
    left: {value: 5}
}

// indexed access types

type NameType = User['firstName'];

const firstName: NameType = 'Ivan';

console.log(firstName);

export{}