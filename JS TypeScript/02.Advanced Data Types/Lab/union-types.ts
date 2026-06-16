function greet(message: string | string[]) {
    console.log (message.length);

    if (typeof message === 'string') {
        return message;
    }

    return message.join(' ');
}

let greeting = 'Hello world';
let greetingArr = ['Dear', 'Sir/Madam'];

console.log(greet(greeting));
console.log(greet(greetingArr));