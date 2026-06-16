function demo(arr) {
    let secret = arr.shift();
    let tokens = arr.shift();

    while (tokens !== 'Reveal'){
        let [command, arg1, arg2] = tokens.split(':|:');
        let temp = '';

        if (command.includes('Insert')){
            let idx = Number(arg1);
            let temp = secret.substring(0, idx);
            secret = secret.substring(idx);
            secret = temp + ' ' + secret;
            console.log(secret);
        }else if (command.includes('Reverse')){
            let substr = arg1;
            if (secret.includes(substr)){
                secret = secret.replace(substr, '');
                let reversed = substr.split('').reverse().join('');
                secret = secret.concat(reversed);
                console.log(secret);
            }else{
                console.log('error');
            }
        }else if (command.includes('Change')){
            let oldStr = arg1;
            let newStr = arg2;
            secret = secret.split(oldStr).join(newStr);
            console.log(secret);
        }
        tokens = arr.shift();
    }
    console.log(`You have a new text message: ${secret}`);
}

demo([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
// demo()