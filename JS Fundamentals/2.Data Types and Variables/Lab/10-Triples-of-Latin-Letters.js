function triples (num){
    num = Number (num);
    let start = 97;
    let end = start + num;
    for (let first = start; first < end; first++){
        for (let second = start; second < end; second++){
            for (let third = start; third < end; third++){
                let firstLetter = String.fromCharCode (first);
                let secondLetter = String.fromCharCode (second);
                let thirdLetter = String.fromCharCode (third);
                let result = `${firstLetter}${secondLetter}${thirdLetter}`;
                console.log(result);
            }
        }
    }
}
triples (3)