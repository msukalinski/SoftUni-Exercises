function extendPrototype(cls) {
    cls.prototype.species = 'Human';
    cls.prototype.toSpeciesString = function () { return `I am a ${this.species}. ${this.toString()}` };
}
class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `My name is ${this.name}`;
    }
}
extendPrototype(Person);

const person = new Person('Marty');

console.log(person.toSpeciesString());