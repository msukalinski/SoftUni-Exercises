function fullName<T extends {fName: string} & {lName: string}>(obj: T) {
    return `The full name is ${obj.fName} ${obj.lName}.`;
}

let output1 = fullName({fName: 'John', lName: 'Doe'});

console.log(output1);