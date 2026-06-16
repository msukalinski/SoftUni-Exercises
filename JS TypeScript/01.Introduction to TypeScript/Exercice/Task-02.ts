function greeting(info: [string, number]) {
    const name = info[0];
    const age = info[1];
    return `Hello, my name is ${name} and my age is ${age}`;
}
console.log(greeting(['Ivan', 20]));
console.log(greeting(['Ivan', '20']));
// console.log(greeting(['Ivan', 20, 'Ivanov']));