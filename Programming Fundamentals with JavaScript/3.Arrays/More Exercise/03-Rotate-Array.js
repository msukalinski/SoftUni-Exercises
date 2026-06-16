function demo(input) {
    let rotations = Number(input.pop());

    for (let index = 0; index < rotations; index++){
        let current = input.pop();
        input.unshift(current);
    }
    console.log(input.join(' '));
}
demo(['1', '2', '3', '4', '2']);
demo(['Banana', 'Orange', 'Coconut', 'Apple', '15']);