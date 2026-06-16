function stringGame(arr){
    let str = arr.shift();
    for (let current of arr){
        let temporary = '';
        if (current == 'Done'){
            break;
        }
        let tokens = current.split(' ');
        let command = tokens.shift();
        if (command == 'Change'){
            let [char, replacement] = tokens;
            let temp = temporary = str.split('');
            for (let i = 0; i < temp.length; i++){
                if (temp[i] == char){
                    temp.splice(i, 1, replacement)
                }
            }
            temporary = temp.join('');
            console.log(temporary);
            str = temporary;
        }else if (command == 'Includes'){
            let word = tokens;
            temporary = str.includes(word);
            if (temporary){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if (command == 'End'){
            let word = tokens;
            temporary = str.endsWith(word);
            if (temporary){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if (command == 'Uppercase'){
            temporary = str.split('').map(a => a.toUpperCase()).join('');
            console.log(temporary);
            str = temporary;
        }else if (command == 'FindIndex'){
            let charIdx = tokens;
            temporary = str.indexOf(charIdx);
            console.log(temporary);
        }else if (command =='Cut'){
            let startIdx = Number(tokens.shift());
            let count = Number(tokens.shift());
            temporary = str.substring(startIdx, startIdx + count);
            console.log(temporary);
        }
    }
}
stringGame (["//Th1s 1s my str1ng!//", 
"Change 1 i", 
"Includes string", 
"End my", 
"Uppercase", 
"FindIndex I", 
"Cut 5 5", 
"Done"])
// stringGame(["*S0ftUni is the B3St Plac3**", 
// "Change 2 o", 
// "Includes best", 
// "End is", 
// "Uppercase", 
// "FindIndex P", 
// "Cut 3 7", 
// "Done"])