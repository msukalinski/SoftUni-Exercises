// Generic Class Using Single Parameter

class Collection<T> {
    public data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    addElement(el: T) {
        this.data.push(el);
    }

    removeElement(el: T) {
        let index = this.data.indexOf(el);

        if (index) {
            this.data.splice(index, 1);
        }
    }

    reverseElements() {
        return this.data.reverse();
    }

    showElements() {
        return this.data;
    }
}

// Generic Class Using Multiple Parameters

class UserInput<F, S> {
    public first: F;
    public second: S;

    constructor(f: F, s: S) {
        this.first = f;
        this.second = s;
    }

    showBoth() {
        return `First: ${this.first}, second: ${this.second}`;
    }
}

let sampleSmth = new UserInput('Ten', 10);
let sampleSmth1 = new UserInput(2, 'Two');

console.log(sampleSmth.showBoth());
console.log(sampleSmth1.showBoth());

// Generic Class Implements Interface

interface ShowEnum<T> {
    returnPair(): [string, T | number];
}

class EnumOption<T> implements ShowEnum<T> {
    public key: string;
    public value: T | number;
    static counter = 0;

    constructor(k: string, v: T) {
        this.key = k;
        this.value = v ?? EnumOption.counter++;
    }

    returnPair(): [string, number | T] {
        return [this.key, this.value];
    }
}

let test1: ShowEnum<string> = new EnumOption('January', 'jan');
console.log(test1.returnPair());
let test2: ShowEnum<number | undefined> = new EnumOption('January', undefined);
console.log(test2.returnPair());
let test3: ShowEnum<number | undefined> = new EnumOption('February', 2);
console.log(test3.returnPair());