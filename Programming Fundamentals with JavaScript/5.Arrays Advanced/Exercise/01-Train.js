function train (arr){
    let waggons = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);
    for (let i = 2; i < arr.length; i++){
        let command = arr[i];
        let tokens = command.split(' ');
        if (tokens[0] === 'Add'){
            let passangers = Number (tokens[1]);
            waggons.push(passangers);
        }else{
            let passangers = Number (tokens[0]);
            for (let index = 0; index < waggons.length; index++){
                if (waggons[index] + passangers <= capacity){
                    waggons[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(waggons.join(' '));
}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])