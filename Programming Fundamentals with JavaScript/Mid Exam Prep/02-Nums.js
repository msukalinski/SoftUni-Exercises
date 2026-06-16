function numsSequence (input){
    let sequence = input.shift().split(' ').map(Number);
    for (let commands of input){
        let tokens = commands.split(' ');
        let command = tokens.shift();
        let [arg1, arg2] = tokens.map(Number);
        if (command === 'Finish'){
            break;
        }
        switch (command){
            case 'Add':
                sequence.push(arg1);
                break;
            case 'Remove':
                sequence = sequence.filter(a => a !== arg1);
                break;
            case 'Replace':
                let idx = sequence.indexOf(arg1);
                if (idx !== -1){
                    sequence[idx] = arg2;
                }
                break;
            case 'Collapse':
                sequence = sequence.filter(num => num >= arg1)
                break;
        }
    }
    console.log(sequence.join(' '));
}
numsSequence (["1 4 5 19", 
"Add 1", 
"Remove 4", 
"Finish"])
numsSequence (["1 20 -1 10", 
"Collapse 8", 
"Finish"])
numsSequence(["5 9 70 -56 9 9", 
"Replace 9 10", 
"Remove 9", 
"Finish"])