function thePiaist (arr){
    let count = arr.shift();
    let list = {};
    for (let i = 0; i < count; i++){
        let [piece, composer, key] = arr[i].split('|');
        list[piece] = {composer, key};
    }
    for (let i = count; i < arr.length; i++){
        let tokens = arr[i].split('|');
        let command = tokens.shift();
        if (command == 'Stop'){
            break;
        }
        if (command == 'Add'){
            let [piece, composer, key] = tokens;
            if (piece in list){
                console.log(`${piece} is already in the collection!`);
            }else{
                list[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }else if (command == 'Remove'){
            let piece = tokens;
            if (piece in list){
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if (command == 'ChangeKey'){
            let [piece, newKey] = tokens;
            if (piece in list){
                list[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (let piece in list){
        console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
    }
}
thePiaist (['3', 
    'Fur Elise|Beethoven|A Minor', 
    'Moonlight Sonata|Beethoven|C# Minor', 
    'Clair de Lune|Debussy|C# Minor', 
    'Add|Sonata No.2|Chopin|B Minor', 
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 
    'Add|Fur Elise|Beethoven|C# Minor', 
    'Remove|Clair de Lune', 
    'ChangeKey|Moonlight Sonata|C# Major', 
    'Stop'])