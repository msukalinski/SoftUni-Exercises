class Animal {
    sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound(): void {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super('Bark');
    }
}

let dog = new Dog;
dog.makeSound();