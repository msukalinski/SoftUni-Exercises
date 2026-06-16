function theImitationGame (arr){
    let message = arr.shift().split('');
    for (let current of arr){
        let tokens = current.split('|');
        let command = tokens.shift();
        if (command === 'Decode'){
            break;
        }else if (command === 'Move'){
            let position = Number(tokens[0]);
            let removedLetters = message.splice(0, position);
            for (let letter of removedLetters){
                message.push(letter);
            }
        }else if (command === 'Insert'){
            let position = Number (tokens.shift());
            let letter = tokens.shift();
            message.splice(position, 0, letter);
        }else if (command === 'ChangeAll'){
            let curLetter = tokens.shift();
            let letterToReplace = tokens.shift();
            for (let index = 0; index < message.length; index++){
                if (curLetter === message[index]){
                    message.splice(index, 1, letterToReplace);
                }
            }  
        }
    }
    console.log(`The decrypted message is: ${message.join('')}`);
}
theImitationGame (['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])