function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let company = new Person('SoftUni');
    let secondPerson = new Person('Stephan', 'Johnson', 25);
    let thirdPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [firstPerson, company, secondPerson, thirdPerson];
}
console.log(getPersons()[1]);