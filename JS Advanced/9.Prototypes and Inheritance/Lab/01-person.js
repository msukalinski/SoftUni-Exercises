function createPerson(firstName, lastName) {
    let output = {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    };
    return output;
}
let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
