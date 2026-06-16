function compare (missing, letter, complete){
    let final = '';
    for (let i = 0; i < missing.length; i++){
        if (missing[i] === '_'){
            final += letter;
        }else{
            final += missing[i];
        }
    }
    console.log(final === complete ? 'Matched' : 'Not Matched');

    // let result = missing.replace('_', letter);
    // let output = result == complete ? 'Matched' : 'Not Matched';
    // console.log(output);
}
compare('Str_ng', 'I', 'Strong')