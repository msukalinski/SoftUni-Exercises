function addCreatedOn(constructor: { new(...args: any[]): User2 }) {
    return class extends constructor {
        createdOn = new Date();
    }
}

@addCreatedOn
class User2 {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayUserInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const user2 = new User2("John Doe", 30);
user2.displayUserInfo()
console.log(user2);
console.log((user2 as any).createdOn);