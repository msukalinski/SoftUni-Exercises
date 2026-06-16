function game(arr) {
    let msg = arr.shift();
    for (let current of arr) {
        let tokens = current.split('|');
        let command = tokens.shift();
        if (command == 'Decode') {
            break;
        }
        let tempMsg = '';
        if (command == 'Move') {
            let idx = Number(tokens[0]);
            let removedLetters = msg.substring(0, idx);
            // console.log(removedLetters);
            tempMsg = msg.replace(removedLetters, '');
            tempMsg += removedLetters;
            msg = tempMsg;
        } else if (command == 'Insert') {
            let idx = Number(tokens[0]);
            let letter = tokens[1];
            tempMsg = msg.split('');
            tempMsg.splice(idx, 0, letter);
            msg = tempMsg.join('');
        } else if (command == 'ChangeAll') {
            let char0 = tokens[0];
            let char1 = tokens[1];
            while (msg.includes(char0)){
                tempMsg = msg.replace(char0, char1);
                msg = tempMsg;
            }
            msg = tempMsg;
        }
    }
    console.log(`The decrypted message is: ${msg}`);
}
game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])


// function game(arr) {
//     let msg = arr.shift().split('');
//     for (let current of arr) {
//         let tokens = current.split('|');
//         let command = tokens.shift();
//         if (command == 'Decode') {
//             break;
//         }
//         if (command == 'Move') {
//             let idx = Number(tokens[0]);
//             let removedLetters = msg.splice(0, idx);
//             for (let ch of removedLetters) {
//                 msg.push(ch)
//             }
//         } else if (command == 'Insert') {
//             let idx = Number(tokens[0]);
//             let letter = tokens[1];
//             msg.splice(idx, 0, letter)
//         } else if (command == 'ChangeAll') {
//             let char0 = tokens[0];
//             let char1 = tokens[1];
//             for (let i = 0; i < msg.length; i++) {
//                 if (char0 === msg[i]) {
//                     msg.splice(i, 1, char1)
//                 }
//             }
//         }
//     }
//     console.log(`The decrypted message is: ${msg.join('')}`);
// }
// game([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'])