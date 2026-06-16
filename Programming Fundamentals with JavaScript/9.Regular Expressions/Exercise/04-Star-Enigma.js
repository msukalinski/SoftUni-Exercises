function starEnigma (arr){
    let msgsCount = Number (arr.shift());
    let decryptedMsgs = [];
    let starPattern = /[star]/gi;
    for (let i = 0; i < msgsCount; i++){
        let msg = arr[i];
        let decryptedMsg = '';
        let matches = msg.match(starPattern);
        if (matches){
            let count = matches.length;
            for (let char of msg){
                let code = char.charCodeAt();
                code -= count;
                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        }else{
            decryptedMsg = msg;
        }
        decryptedMsgs.push(decryptedMsg);
    }
    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    let attacked = [];
    let destroyed = [];
    for (let msg of decryptedMsgs){
        let match = msg.match(planetPattern);
        if (match){
            if (match.groups.type == 'A'){
                attacked.push(match.groups.name);
            }else{
                destroyed.push(match.groups.name);
            }
        }
    }
    attacked.sort((a, b) => a.localeCompare(b))
    destroyed.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}
starEnigma (['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'])
// starEnigma (['3',

// "tt(''DGsvywgerx>6444444444%H%1B9444",

// 'GQhrr|A977777(H(TTTT',

// 'EHfsytsnhf?8555&I&2C9555SR'])