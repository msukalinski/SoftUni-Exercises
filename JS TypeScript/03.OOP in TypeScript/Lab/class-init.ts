export { }

class Dog {
    private name: string;
    private age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    bark() {
        return `${this.name} woofed friendly`;
    }
}

let tommy = new Dog('Tommy', 6);
console.log(tommy);
console.log(tommy.bark());