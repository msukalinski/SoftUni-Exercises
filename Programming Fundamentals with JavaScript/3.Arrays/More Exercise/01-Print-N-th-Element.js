function demo(input) {
    let step = Number(input.pop());
    let newArr = [];

    for (let index = 0; index < input.length; index++){
        if (index % step === 0){
            newArr.push(input[index])
        }
    }
    console.log(newArr.join(' '));
}
demo(['5', '20', '31', '4', '20', '2']);
demo(['dsa', 'asd', 'test', 'test', '3']);
demo(['1', '2', '3', '4', '5', '6']);