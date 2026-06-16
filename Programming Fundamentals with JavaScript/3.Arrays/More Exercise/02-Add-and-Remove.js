function demo(input) {
    let result = [];
    let num = 1;

    for (let i = 0; i < input.length; i++){
        let command = input[i];
        if (command === 'add'){
            result.push(num);
        }else if (command === 'remove'){
            result.pop()
        }
        num++;
    }
    if (result.length === 0){
        console.log('Empty');
    }else{
        console.log(result.join(' '));
    }
}
demo(['add', 'add', 'add', 'add']);
demo(['add', 'add', 'remove', 'add', 'add']);
demo(['remove', 'remove', 'remove']);