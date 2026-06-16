class Person {
    constructor(public fName: string, public lName: string) { };

    @log
    static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
}

function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);

        original.apply(this, ...args);
    }

    return descriptor;
}

let person = new Person('John', 'Does');
Person.getFullName(person.fName, person.lName)
Person.getFullName('Benny', 'Tres');