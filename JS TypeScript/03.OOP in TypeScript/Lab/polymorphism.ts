//runtime|dynamic polymorphism
//method override

// type Greeter = { greet(): string }

// class Person {
//     constructor(public name: string) { }
//     greet() { return `${this.name} says hello.` };
// }
// let person: Greeter = new Person('John');

class Shape {
    draw(): void { console.log('Drawing shape.') };
}

class Circle extends Shape {
    draw() { console.log('Drawing a circle.') }; //implicit override
}

//method Overloads

class Person {
    greet(num: number): void;
    greet(fName: string, lName: string): void;
    greet(a: number | string, b?: string): void {
        console.log(typeof a === 'number' ? `Your number: ${a}` : `Hello ${a} ${b}`);
    }
}

let person = new Person();
person.greet('John', 'Doe');
person.greet(24);