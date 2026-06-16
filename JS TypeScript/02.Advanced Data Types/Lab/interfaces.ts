//basic interface

interface Person {
    fullName: string,
    email: string,
}

let thomas: Person = {
    fullName: 'Thomas Doe',
    email: 'thomas@test.test',
}

console.log(thomas.fullName);

//describe function types

interface Calculator {
    (numOne: number, numTwo: number, operation: string): number;
}

let calc: Calculator = function (a: number, b: number, operation: string): 
number {
    let result: number = 0;
    const addition = () => result = a + b;
    const parser = {
        'addition': addition,
    }
    // parser[operation]();
    return result;
}

//implemented by classes

interface ClockLayout {
    hour: number;
    minute: number;
    showTime(h: number, m: number): string;
}

class Clock implements ClockLayout {
    public hour;
    public minute;
    constructor (h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }

    showTime() {
        return `Current time: ${this.hour}:${this.minute}`;
    }
}